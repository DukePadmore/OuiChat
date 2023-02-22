import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Down from '../assets/images/chevron-down.svg';
import NewMsg from '../assets/images/edit.svg';
import Logout from '../assets/images/log-out.svg';
import Settings from '../assets/images/settings.svg';
import Moon from '../assets/images/moon.svg';

const SideNav = () => {
  const [error, setError] = useState();
  const { logOutFirebase, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOutFirebase();
      navigate('/signin');
      console.log(currentUser);
    } catch {}
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
            src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
            alt='Minion'
          />
        </div>
        <div>
          <img src={Logout} alt='logout icon' onClick={handleLogout} />
        </div>
        <div>
          <img src={Settings} alt='settings icon' />
        </div>
        <div>
          <img src={Moon} alt='dark-theme icon' />
        </div>
        <div>
          <img src={NewMsg} alt='new-message icon' />
        </div>
        {/* <div>
          <img src={Down} alt='down-chevron icon' />
        </div> */}
      </div>
    </div>
  );
};

export default SideNav;
