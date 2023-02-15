import Attach from '../assets/images/paperclip.svg';
import Emoji from '../assets/images/emoji.svg';
import Send from '../assets/images/send.svg';

const Input = () => {
  return (
    <div className='chat-input'>
      <div className='input-actions'>
        <div className='input-emoji'>
          <img src={Emoji} alt='Emoji icon' />
        </div>
        <div className='input-attach'>
          <label htmlFor='attach-file'>
            <img src={Attach} alt='Attach file icon' />
          </label>
          <input type='file' name='attach-file' id='attach-file' />
        </div>
      </div>
      <input
        className='input-message'
        type='text'
        placeholder='Type a message'
      />
      <div className='input-send'>
        <img src={Send} alt='Send message icon' />
      </div>
    </div>
  );
};

export default Input;
