import { createContext, useState, useContext, useEffect } from 'react';
import { auth, db, storage } from '../utils/firebase-config';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const signUpFirebase = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInFirebase = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutFirebase = () => {
    return signOut(auth);
  };

  const resetPasswordFirebase = email => {
    return sendPasswordResetEmail(auth, email);
  };

  const upload = async (file, username, user) => {
    const storageRef = ref(storage, `profilepictures/${user.uid}.png`);
    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async downloadURL => {
        try {
          //Update profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,
          });
          //create user on firestore
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, 'userConvos', user.uid), {});
          navigate('/');
        } catch {}
      });
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUpFirebase,
    signInFirebase,
    logOutFirebase,
    resetPasswordFirebase,
    upload,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
