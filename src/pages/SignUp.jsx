const SignUp = () => {
  return (
    <div className='container'>
      <div className='signup'>
        <h2>Create your OuiChat account</h2>
        <form className='signup-form'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
          <input type='password' id='password' />
          <input type='file' />
          <button>Sign up</button>
        </form>
        <p>You already have an account ? Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
