import Logo from '../assets/images/logo.png';
import LogoBlack from '../assets/images/logo-black.png';
import { useTheme } from '../context/ThemeContext';

const WelcomeChat = () => {
  const { isDark } = useTheme();

  return (
    <div className='welcome-chat'>
      <div className='welcome-chat-container'>
        <div className='welcome-chat-message'>
          <div>
            <img src={isDark ? Logo : LogoBlack} alt='ouichat logo' />
          </div>
          <p>Welcome, start a conversation right now ! 😁</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeChat;
