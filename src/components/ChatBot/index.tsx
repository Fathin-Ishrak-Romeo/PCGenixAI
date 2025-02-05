import { useState } from 'react';
import { MessageCircle, Minus, X } from 'lucide-react';
import { defaultQuestions, getRandomQuestions } from '../../data/chatbotQuestions';
import { Message, ChatState } from './types';
import ChatMessage from './ChatMessage';
import SuggestedQuestions from './SuggestedQuestions';
import QuestionCategories from './QuestionCategories';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [chatState, setChatState] = useState<ChatState>({
    messages: [{
      id: '1',
      text: "Hello! How can I help you today? You can ask me anything about PC building or browse through our frequently asked questions.",
      isUser: false,
      timestamp: new Date()
    }],
    showSuggestions: true
  });

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };

    setChatState(prev => ({
      messages: [...prev.messages, newMessage],
      showSuggestions: true // Always show suggestions after any message
    }));
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    addMessage(input, true);
    // Add bot response
    addMessage("Here are some questions you might be interested in:", false);
    setInput("");
    setShowAllQuestions(false);
  };

  const handleQuestionClick = (qa: typeof defaultQuestions[0]) => {
    addMessage(qa.question, true);
    addMessage(qa.answer, false);
    setShowAllQuestions(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600"
      >
        <MessageCircle size={20} />
      </button>
    );
  }

  return (
    <div
      className={`fixed right-4 bottom-4 w-72 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl transition-all duration-300 ${
        isMinimized ? 'h-12' : 'h-[24rem]'
      }`}
    >
      <div className="flex justify-between items-center p-3 border-b dark:border-gray-700/50">
        <h3 className="text-sm font-semibold">PCGenixAI Assistant</h3>
        <div className="flex space-x-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="h-[calc(100%-7rem)] overflow-y-auto p-3 space-y-3">
            {chatState.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {showAllQuestions ? (
              <QuestionCategories onQuestionClick={handleQuestionClick} />
            ) : chatState.showSuggestions && (
              <>
                <SuggestedQuestions
                  questions={getRandomQuestions(5)} // Use random questions each time
                  onQuestionClick={handleQuestionClick}
                />
                <button
                  onClick={() => setShowAllQuestions(true)}
                  className="text-xs text-primary-500 hover:text-primary-600"
                >
                  View all questions
                </button>
              </>
            )}
          </div>

          <div className="p-3 border-t dark:border-gray-700/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-1.5 text-sm border rounded-md bg-white/50 dark:bg-gray-700/50 dark:border-gray-600/50"
              />
              <button
                onClick={handleSend}
                className="px-3 py-1.5 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600"
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;