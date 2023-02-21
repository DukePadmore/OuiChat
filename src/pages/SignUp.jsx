import Img from '../assets/images/image.svg';

const SignUp = () => {
  return (
    <div className='container'>
      <div className='signup'>
        <h2>Create your account</h2>
        <form className='signup-form'>
          <div className='form-inputs'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' />
          </div>
          <div className='form-inputs'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='form-inputs'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <label className='image-upload-label' htmlFor='profile-pic'>
            <img src={Img} alt='image upload icon' />
            <span>Add a profile picture</span>
          </label>
          <input type='file' id='profile-pic' />
          <button className='signup-submit'>Sign up</button>
        </form>
        <p>Already have an account? Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
