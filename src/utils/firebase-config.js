import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCgkPNVfokRI9n2i4GcSN7dkc6JgmjYk9Q',
  authDomain: 'ouichat-3358a.firebaseapp.com',
  projectId: 'ouichat-3358a',
  storageBucket: 'ouichat-3358a.appspot.com',
  messagingSenderId: '820446170198',
  appId: '1:820446170198:web:aaba97ddaa6f1c9375bff7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
