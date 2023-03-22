import SideNav from './SideNav';
import Search from './Search';
import Convos from './Convos';
import { useChat } from '../context/ChatContext';

const Sidebar = () => {
  const { data } = useChat();
  return (
    <div
      className={data.chatId === 'null' ? 'sidebar active' : 'sidebar inactive'}
    >
      <SideNav />
      <Search />
      <Convos />
    </div>
  );
};

export default Sidebar;
