import ChatNav from './ChatNav';
import Messages from './Messages';
import Input from './Input';
import WelcomeChat from './WelcomeChat';
import { useChat } from '../context/ChatContext';

const Chat = () => {
  const { data } = useChat();

  if (data.chatId === 'null') {
    return (
      <div className='chat'>
        <WelcomeChat />
      </div>
    );
  } else {
    return (
      <div className='chat'>
        <ChatNav />
        <Messages />
        <Input />
      </div>
    );
  }
};

export default Chat;
