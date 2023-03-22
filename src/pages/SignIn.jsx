import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInFirebase } = useAuth();
  const { isDark } = useTheme();
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    let errorsArray = [];
    if (
      !emailRef.current.value.length ||
      passwordRef.current.value.length < 6
    ) {
      errorsArray.push('Please enter your email and password');
    }

    if (errorsArray.length) {
      setError(errorsArray);
      return;
    }

    try {
      errorsArray = [];
      setLoading(true);
      await signInFirebase(emailRef.current.value, passwordRef.current.value);
      emailRef.current.value = '';
      passwordRef.current.value = '';
      navigate('/');
    } catch {
      errorsArray.push('Incorrect email or password');
    }
    setError(errorsArray);
    setLoading(false);
  };

  return (
    <div className={isDark ? 'container dark-mode' : 'container'}>
      <div className='signin'>
        <h2>Sign in to your account</h2>
        {error.length !== 0 && (
          <ul className='error-message'>
            {error.map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <form className='signin-form' onSubmit={handleSubmit}>
          <div className='form-inputs'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className='form-inputs'>
            <div className='form-inputs-password'>
              <label htmlFor='password'>Password</label>
              <Link to='/reset' className='password-reset-link'>
                Forgot your password?
              </Link>
            </div>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <button className='signin-submit' disabled={loading}>
            Sign in
          </button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to='/signup' className='link'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
