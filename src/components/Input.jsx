import Attach from '../assets/images/paperclip.svg';
import Emoji from '../assets/images/smile.svg';
import Send from '../assets/images/send.svg';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { useState } from 'react';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../utils/firebase-config';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const { currentUser } = useAuth();
  const { data } = useChat();

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSendMessage = async () => {
    if (!text && !image) {
      return;
    } else if (text && image) {
      const storageRef = ref(storage, v4());
      await uploadBytesResumable(storageRef, image).then(() => {
        getDownloadURL(storageRef).then(async downloadURL => {
          await updateDoc(doc(db, 'chats', data.chatId), {
            messages: arrayUnion({
              id: v4(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              image: downloadURL,
            }),
          });
        });
      });
    } else if (text && !image) {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: v4(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    } else if (image && !text) {
      const storageRef = ref(storage, v4());

      await uploadBytesResumable(storageRef, image).then(() => {
        getDownloadURL(storageRef).then(async downloadURL => {
          await updateDoc(doc(db, 'chats', data.chatId), {
            messages: arrayUnion({
              id: v4(),
              senderId: currentUser.uid,
              date: Timestamp.now(),
              image: downloadURL,
            }),
          });
        });
      });
    }

    await updateDoc(doc(db, 'userConvos', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userConvos', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });

    setImage(null);
    setText('');
  };

  const handleKeyDown = e => {
    if (e.code === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='chat-input'>
      <div className='input-actions'>
        <div className='input-emoji'>
          <img src={Emoji} alt='Emoji icon' />
        </div>
        <div className='input-attach'>
          <label htmlFor='attach-file'>
            <img src={Attach} alt='Attach file icon' />
          </label>
          <input
            type='file'
            name='attach-file'
            id='attach-file'
            onChange={e => setImage(e.target.files[0])}
          />
        </div>
      </div>
      <input
        className='input-message'
        type='text'
        placeholder='Type a message'
        onChange={e => setText(e.target.value)}
        value={text}
        onKeyDown={handleKeyDown}
      />
      <div className='input-send' onClick={handleSendMessage}>
        <img src={Send} alt='Send message icon' />
      </div>
    </div>
  );
};

export default Input;
