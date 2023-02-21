const SignIn = () => {
  return (
    <div className='container'>
      <div className='signin'>
        <h2>Sign in to your account</h2>
        <form className='signin-form'>
          <div className='form-inputs'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='form-inputs'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button className='signin-submit'>Sign in</button>
        </form>
        <p>Don't have an account? Sign up</p>
      </div>
    </div>
  );
};

export default SignIn;
