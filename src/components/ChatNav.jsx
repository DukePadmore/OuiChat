import { useChat } from '../context/ChatContext';
import Back from '../assets/images/chevron-left.svg';

const ChatNav = () => {
  const { data, dispatch } = useChat();
  const handleReturn = () => {
    dispatch({
      type: 'ERASE_USER',
    });
  };
  return (
    <div className='chatnav'>
      <div className='back-arrow' onClick={handleReturn}>
        <img src={Back} alt='back-arrow' />
      </div>
      <div className='receiver'>
        <div className='user-img'>
          <img src={data.user?.photoURL} alt={data.user?.displayName} />
        </div>
        <p>{data.user?.displayName}</p>
      </div>
    </div>
  );
};

export default ChatNav;
