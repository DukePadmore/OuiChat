import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDark, isFullScreen } = useTheme();
  return (
    <div className={isDark ? 'container dark-mode' : 'container'}>
      <div className={isFullScreen ? 'home full' : 'home'}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
