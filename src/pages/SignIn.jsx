import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInFirebase, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    // if (usernameRef.current.value.length < 2) {
    //     setError('Username must be at least 2 characters');
    //     return;
    //   } else if (!emailRef.current.value.length) {
    //     setError('Please')
    //   }

    try {
      setError('');
      setLoading(true);
      await signInFirebase(emailRef.current.value, passwordRef.current.value);
      console.log(currentUser);
      navigate('/');
    } catch {
      setError('Failed to log in.');
    }
    setLoading(false);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className='container'>
      <div className='signin'>
        <h2>Sign in to your account</h2>
        {error && <span className='error-message'>Failed</span>}
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
