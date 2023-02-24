import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDark } = useTheme();
  return (
    <div className={isDark ? 'container dark-mode' : 'container'}>
      <div className='home'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
