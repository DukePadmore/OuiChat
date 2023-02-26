import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passworConfirmdRef = useRef();
  const { signUpFirebase, currentUser } = useAuth();
  const { isDark } = useTheme();
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    let errorsArray = [];
    if (usernameRef.current.value.length < 2) {
      errorsArray.push('Please enter your username (at least 4 characters)');
    }
    if (!emailRef.current.value.length) {
      errorsArray.push('Please enter your email');
    }
    if (passwordRef.current.value.length < 6) {
      errorsArray.push('Password must be at least 6 characters');
    }
    if (passworConfirmdRef.current.value !== passwordRef.current.value) {
      errorsArray.push('Passwords must match');
    }

    if (errorsArray.length) {
      setError(errorsArray);
      return;
    }

    try {
      errorsArray = [];
      setLoading(true);
      await signUpFirebase(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      errorsArray.push('Failed to create an account with this email');
    }
    setError(errorsArray);
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
              ref={passworConfirmdRef}
            />
          </div>
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
