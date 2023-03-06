import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useSearch } from '../context/SearchContext';
import { db } from '../utils/firebase-config';
import {
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

const ConvoSearch = ({ displayName, photoURL, uid }) => {
  const { currentUser } = useAuth();
  const { searchedUser, setSearchedUser, setIsSearchActive } = useSearch();

  const handleSelect = async () => {
    const chatId =
      currentUser.uid > uid ? currentUser.uid + uid : uid + currentUser.uid;
    try {
      console.log('starting');
      const res = await getDoc(doc(db, 'chats', chatId));
      if (!res.exists()) {
        await setDoc(doc(db, 'chats', chatId), { messages: [] });

        await updateDoc(doc(db, 'userConvos', currentUser.uid), {
          [chatId + '.userInfo']: {
            uid,
            displayName,
            photoURL,
          },
          [chatId + '.date']: serverTimestamp(),
        });
        await updateDoc(doc(db, 'userConvos', uid), {
          [chatId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [chatId + '.date']: serverTimestamp(),
        });
      }
    } catch (err) {}
    setSearchedUser(null);
    setIsSearchActive(false);
  };

  return (
    <section className='convo-item' onClick={handleSelect}>
      <div className='user-img'>
        <img src={photoURL} alt={displayName} />
      </div>
      <div className='convo-content'>
        <h3>{displayName}</h3>
        <p>What's good ? You ever been to Japan ?</p>
      </div>
      <div className='convo-details'>
        <p className='convo-last-msg'>08:50</p>
        <div className='convo-notif'>8</div>
      </div>
    </section>
  );
};

export default ConvoSearch;
