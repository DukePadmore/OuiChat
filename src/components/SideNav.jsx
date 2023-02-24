import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NewMsg from '../assets/images/edit.svg';
import Logout from '../assets/images/log-out.svg';
import Sun from '../assets/images/sun.svg';
import Moon from '../assets/images/moon.svg';
import { useTheme } from '../context/ThemeContext';

const SideNav = () => {
  const [error, setError] = useState();
  const { logOutFirebase, currentUser } = useAuth();
  const { toggleIsDark, isDark } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOutFirebase();
      navigate('/signin');
      console.log(currentUser);
    } catch {}
  };

  const handleToggleDarkMode = () => {
    toggleIsDark();
  };

  return (
    <div className='sidenav'>
      <div className='buttons-container'>
        <div className='buttons red'></div>
        <div className='buttons green'></div>
      </div>

      <div className='sidenav-icons'>
        <div className='user-img'>
          <img
            src='https://pyxis.nymag.com/v1/imgs/b1c/930/f37a5b262fd32986052d8daf09ca367b03-atlanta.rsquare.w700.jpg'
            alt='Earn'
          />
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
        <div>
          <img src={NewMsg} alt='new-message icon' />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
