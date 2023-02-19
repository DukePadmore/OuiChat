import React from 'react';

const Conversation = () => {
  return (
    <section className='convo-item'>
      <div className='user-img'>
        <img
          src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          alt='Minion'
        />
      </div>
      <div className='convo-details'>
        <h3>Minion</h3>
        <p>Salut! Comment tu vas ?</p>
      </div>
    </section>
  );
};

export default Conversation;
