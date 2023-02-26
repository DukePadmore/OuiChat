import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [message, setMessage] = useState('');
  const { resetPasswordFirebase } = useAuth();
  const { isDark } = useTheme();

  const handleSubmit = async e => {
    e.preventDefault();

    let errorsArray = [];
    setMessage('');
    if (!emailRef.current.value.length) {
      errorsArray.push('Please enter your email');
    }

    if (errorsArray.length) {
      setError(errorsArray);
      return;
    }

    try {
      setMessage('');
      errorsArray = [];
      setLoading(true);
      await resetPasswordFirebase(emailRef.current.value);
      setMessage(
        "We've sent you an email. Check your inbox for further instructions."
      );
    } catch {
      errorsArray.push('We couldn’t find that email. Please try again.');
    }
    setError(errorsArray);
    emailRef.current.value = '';
    setLoading(false);
  };

  return (
    <div className={isDark ? 'container dark-mode' : 'container'}>
      <div className='password-reset'>
        <h2>Reset your password</h2>
        <p>
          Enter the email associated with your account & we'll send you a link
          to reset your password.
        </p>
        {error.length !== 0 && (
          <ul className='error-message'>
            {error.map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {message && <span className='success-message'>{message}</span>}
        <form className='password-reset-form' onSubmit={handleSubmit}>
          <div className='form-inputs'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
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
