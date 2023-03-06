import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NewMsg from '../assets/images/edit.svg';
import Logout from '../assets/images/log-out.svg';
import Sun from '../assets/images/sun.svg';
import Moon from '../assets/images/moon.svg';
import { useTheme } from '../context/ThemeContext';

const SideNav = () => {
  const { logOutFirebase, currentUser } = useAuth();
  const { toggleIsDark, isDark, toggleIsFullScreen, isFullScreen } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOutFirebase();
      navigate('/signin');
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleDarkMode = () => {
    toggleIsDark();
  };

  const handleToggleFullScreen = () => {
    toggleIsFullScreen();
  };

  return (
    <div className='sidenav'>
      <div className='buttons-container'>
        <div className='buttons red' onClick={handleLogout}></div>
        <div
          className={isFullScreen ? 'buttons yellow' : 'buttons green'}
          onClick={handleToggleFullScreen}
        ></div>
      </div>
      <div className='sidenav-icons'>
        <div className='user-img'>
          <img src={currentUser.photoURL} alt={currentUser.displayName} />
        </div>
        <div>
          <img src={Logout} alt='logout icon' onClick={handleLogout} />
        </div>

        <div>
          <img
            src={!isDark ? Sun : Moon}
            alt='dark-theme icon'
            onClick={handleToggleDarkMode}
          />
        </div>
        {/* <div>
          <img src={NewMsg} alt='new-message icon' />
        </div> */}
      </div>
    </div>
  );
};

export default SideNav;
