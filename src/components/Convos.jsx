import Conversation from './Conversation';
import ConvoSearch from './ConvoSearch';
import { useSearch } from '../context/SearchContext';
import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import { useAuth } from '../context/AuthContext';

const Convos = () => {
  const { searchedUser, isSearchActive } = useSearch();
  const [chats, setChats] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const getChats = () => {
      const unsubscribe = onSnapshot(
        doc(db, 'userConvos', currentUser.uid),
        doc => {
          setChats(Object.entries(doc.data()));
        }
      );
      return unsubscribe;
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <div className='convos'>
      {isSearchActive && searchedUser ? (
        <ConvoSearch {...searchedUser} />
      ) : (
        chats
          ?.sort((a, b) => b[1].date - a[1].date)
          .map(chat => <Conversation key={chat[0]} {...chat[1]} />)
      )}
      <p className='convos-end'>Start a new conversation !</p>
    </div>
  );
};

export default Convos;
