const Message = () => {
  return (
    <div className='message received'>
      <div className='message-content'>
        <div className='message-img with-text'>
          <img
            src='https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt='image content'
          />
          <span>20:38</span>
        </div>
        <p className='message-text with-image'>
          What's good ? Have you ever been to Japan ?<span>20:38</span>
        </p>
      </div>
    </div>
  );
};

export default Message;

// Appliquer la classe 'received' ou 'sent' de manière conditionnelle. Same pour les classes 'with-text' et 'with-image'. Enfin, faire apparaître une des deux spans uniquement.
