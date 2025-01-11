import { QAPair } from '../../data/chatbotQuestions';

interface SuggestedQuestionsProps {
  questions: QAPair[];
  onQuestionClick: (question: QAPair) => void;
}

const SuggestedQuestions = ({ questions, onQuestionClick }: SuggestedQuestionsProps) => {
  return (
    <div className="space-y-2 mb-3">
      <p className="text-xs text-gray-500 dark:text-gray-400">Suggested questions:</p>
      <div className="flex flex-wrap gap-1.5">
        {questions.map((qa) => (
          <button
            key={qa.id}
            onClick={() => onQuestionClick(qa)}
            className="text-xs px-2 py-1 rounded-full bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-600/50 transition-colors"
          >
            {qa.question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedQuestions;