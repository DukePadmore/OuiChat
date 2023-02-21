import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <div className='container'>
      <div className='home'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
