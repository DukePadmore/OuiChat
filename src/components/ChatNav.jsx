import { useChat } from '../context/ChatContext';

const ChatNav = () => {
  const { data } = useChat();
  return (
    <div className='chatnav'>
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
