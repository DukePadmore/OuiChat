const Message = () => {
  return (
    <div className='message sent'>
      <div className='message-content'>
        <div className='message-img with-text'>
          <img
            src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
            alt='image content'
          />
          <span>20:38</span>
        </div>
        <p className='message-text with-image'>
          Hi there ! How do you like the app so far?
          <span>20:38</span>
        </p>
      </div>
    </div>
  );
};

export default Message;

// Appliquer la classe 'received' ou 'sent' de manière conditionnelle. Same pour les classes 'with-text' et 'with-image'. Enfin, faire apparaître une des deux spans uniquement.
