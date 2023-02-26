import { useAuth } from '../context/AuthContext';

const ChatNav = () => {
  const { currentUser } = useAuth();
  return (
    <div className='chatnav'>
      <div className='receiver'>
        <div className='user-img'>
          <img
            src='https://pyxis.nymag.com/v1/imgs/963/4d5/cec03aeb2306146b8f68d1fda449246771-recaps-atlanta-ep1.rsquare.w700.jpg'
            alt='Darius'
          />
        </div>
        <p>{currentUser?.email}</p>
      </div>
    </div>
  );
};

export default ChatNav;
