import { useState } from 'react';
import { QAPair, getQuestionsByCategory } from '../../data/chatbotQuestions';

interface QuestionCategoriesProps {
  onQuestionClick: (question: QAPair) => void;
}

const categories = [
  { id: 'basics', label: 'Basics' },
  { id: 'components', label: 'Components' },
  { id: 'performance', label: 'Performance' },
  { id: 'support', label: 'Support' }
] as const;

const QuestionCategories = ({ onQuestionClick }: QuestionCategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]['id']>('basics');

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-2 py-1 rounded-full text-xs transition-colors ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-600/50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="space-y-1.5">
        {getQuestionsByCategory(activeCategory).map((qa) => (
          <button
            key={qa.id}
            onClick={() => onQuestionClick(qa)}
            className="w-full text-left p-2 rounded-lg text-xs hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
          >
            {qa.question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCategories;