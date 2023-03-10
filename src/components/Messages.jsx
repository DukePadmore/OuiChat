import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import { useEffect, useState } from 'react';
import { useChat } from '../context/ChatContext';
import Message from './Message';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useChat();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), doc => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className='messages'>
      {messages.map(m => (
        <Message key={m.id} message={m} />
      ))}
    </div>
  );
};

export default Messages;
