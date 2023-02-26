import React, { useState, useContext, useEffect } from 'react';
import { auth, storage } from '../utils/firebase-config';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

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

  // ---------------- TESTS IMAGE UPLOAD ----------------
  // const upload = async (file, currentUser) => {
  //   const fileRef = ref(storage, currentUser.uid + '.png');
  //   const snapshot = await uploadBytesResumable(fileRef, file);
  //   const photoURL = await getDownloadURL(fileRef);
  //   return photoURL;
  // };

  // const updateFirebase = (currentUser, username, url) => {
  //   return updateProfile(currentUser, {
  //     displayName: username,
  //     photoURL: url,
  //   });
  // };

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
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
