import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Img from '../assets/images/image.svg';
// import ProfilePic from '../assets/images/profile-pic.png';

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const picRef = useRef();
  const { signUpFirebase, upload } = useAuth();
  const { isDark } = useTheme();
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    const pic = picRef.current.files[0];

    let errorsArray = [];
    if (username.length < 2) {
      errorsArray.push('Please enter your username (min. 4 characters)');
    }
    if (!email.length) {
      errorsArray.push('Please enter your email');
    }
    if (password.length < 6) {
      errorsArray.push('Please enter your password (min. 6 characters)');
    }
    if (passwordConfirm !== password) {
      errorsArray.push('Passwords must match');
    }

    if (errorsArray.length) {
      setError(errorsArray);
      setLoading(false);
      return;
    }

    try {
      errorsArray = [];
      const res = await signUpFirebase(email, password);
      await upload(pic, username, res.user);
    } catch {
      errorsArray.push('Failed to create an account with this email');
      setError(errorsArray);
    }
    setLoading(false);
  };

  return (
    <div className={isDark ? 'container dark-mode' : 'container'}>
      <div className='signup'>
        <h2>Create your account</h2>
        {error.length !== 0 && (
          <ul className='error-message'>
            {error.map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
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
          <div className='form-inputs'>
            <label htmlFor='password-confirm'>Password confirmation</label>
            <input
              type='password'
              id='password-confirm'
              ref={passwordConfirmRef}
            />
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
