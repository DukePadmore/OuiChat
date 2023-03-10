import { useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';

const Message = ({ message }) => {
  const { currentUser } = useAuth();
  const { data } = useChat();

  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [message]);
  return (
    <div
      ref={ref}
      className={
        message.senderId === currentUser.uid
          ? 'message sent'
          : 'message received'
      }
    >
      <div className='message-content'>
        {message.image && (
          <div
            className={message.text ? 'message-img with-text' : 'message-img'}
          >
            <img src={message.image} alt='image content' />
            <span>20:38</span>
          </div>
        )}
        {message.text && (
          <p
            className={
              message.image ? 'message-text with-image' : 'message-text'
            }
          >
            {message.text}
            <span>20:38</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Message;
