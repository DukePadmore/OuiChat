import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../utils/firebase-config';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

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
    return sendPasswordResetEmail();
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
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
