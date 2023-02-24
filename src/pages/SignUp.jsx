import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../assets/images/image.svg';

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const picRef = useRef();
  const { signUpFirebase } = useAuth();
  const { isDark } = useTheme();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    // if (usernameRef.current.value.length < 2) {
    //   setError('Username must be at least 2 characters');
    //   return;
    // } else if (!emailRef.current.value.length) {
    //   setError('Please')
    // }
    try {
      setError('');
      setLoading(true);
      await signUpFirebase(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to create an account.');
    }
    setLoading(false);
  };

  return (
    <div className={isDark ? 'container dark-mode' : 'container'}>
      <div className='signup'>
        <h2>Create your account</h2>
        {error && <span className='error-message'>{error}</span>}
        <form className='signup-form' onSubmit={handleSubmit}>
          <div className='form-inputs'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' ref={usernameRef} />
          </div>
          <div className='form-inputs'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className='form-inputs'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <label className='image-upload-label' htmlFor='profile-pic'>
            <img src={Img} alt='image upload icon' />
            <span>Add a profile picture</span>
          </label>
          <input type='file' id='profile-pic' ref={picRef} />
          <button className='signup-submit' disabled={loading}>
            Sign up
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to='/signin' className='link'>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
