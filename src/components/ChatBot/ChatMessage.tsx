import { Message } from './types';
import { formatDate } from '../../utils/dateUtils';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-2 rounded-lg text-sm ${
          message.isUser
            ? 'bg-primary-500 text-white'
            : 'bg-gray-100/50 dark:bg-gray-700/50'
        }`}
      >
        <div>{message.text}</div>
        <div className="text-[10px] mt-1 opacity-70">
          {formatDate(message.timestamp.toString())}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;