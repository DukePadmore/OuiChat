import React from 'react';
import { useChat } from '../context/ChatContext';

const Conversation = ({ userInfo, lastMessage, date }) => {
  const { dispatch } = useChat();

  const handleClick = (id, name, image) => {
    dispatch({
      type: 'CHANGE_USER',
      payload: { uid: id, displayName: name, photoURL: image },
    });
  };

  return (
    <section
      className='convo-item'
      onClick={() =>
        handleClick(userInfo?.uid, userInfo?.displayName, userInfo?.photoURL)
      }
    >
      <div className='user-img'>
        <img src={userInfo?.photoURL} alt={userInfo?.displayName} />
      </div>
      <div className='convo-content'>
        <h3>{userInfo?.displayName}</h3>
        <p>{lastMessage?.text}</p>
      </div>
      {/* <div className='convo-details'>
        <p className='convo-last-msg'>08:37</p>
        <div className='convo-notif'>8</div>
      </div> */}
    </section>
  );
};

export default Conversation;
