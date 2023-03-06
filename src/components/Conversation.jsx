import React from 'react';

const Conversation = ({ displayName, photoURL, uid }) => {
  return (
    <section className='convo-item'>
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

export default Conversation;
