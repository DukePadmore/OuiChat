import SideNav from './SideNav';
import Search from './Search';
import Convos from './Convos';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SideNav />
      <Search />
      <Convos />
    </div>
  );
};

export default Sidebar;
