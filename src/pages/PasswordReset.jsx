import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { resetPasswordFirebase } = useAuth();
  const { isDark } = useTheme();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPasswordFirebase(emailRef.current.value);
      setMessage(
        "We've sent you an email. Check your inbox for further instructions."
      );
    } catch {
      setError('We couldn’t find that email. Please try again.');
    }
    setLoading(false);
    emailRef.current.value = '';
  };

  return (
    <div className={isDark ? 'container dark-mode' : 'container'}>
      <div className='password-reset'>
        <h2>Reset your password</h2>
        <p>
          Enter the email associated with your account & we'll send you a link
          to reset your password.
        </p>
        <form className='password-reset-form' onSubmit={handleSubmit}>
          <div className='form-inputs'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          {message && <span className='success-message'>{message}</span>}
          {error && <span className='error-message'>{error}</span>}
          <button className='password-reset-submit' disabled={loading}>
            Continue
          </button>
        </form>
        <Link to='/signin' className='link'>
          Back to sign in
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;
