import React from 'react';

const Conversation = () => {
  return (
    <section className='convo-item'>
      <div className='user-img'>
        <img
          src='https://pyxis.nymag.com/v1/imgs/963/4d5/cec03aeb2306146b8f68d1fda449246771-recaps-atlanta-ep1.rsquare.w700.jpg'
          alt='Darius'
        />
      </div>
      <div className='convo-content'>
        <h3>Darius</h3>
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
