import ChatNav from './ChatNav';
import Messages from './Messages';
import Input from './Input';
import { useChat } from '../context/ChatContext';

const Chat = () => {
  return (
    <div className='chat'>
      <ChatNav />
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
