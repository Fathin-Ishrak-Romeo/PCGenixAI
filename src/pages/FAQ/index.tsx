import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I start building my PC?',
    answer: 'Start by using our PC Builder tool to select compatible components. Choose your CPU first, then select other components that match your processor and motherboard requirements.'
  },
  {
    question: 'What is the return policy?',
    answer: 'We offer a 30-day return policy for unopened items in their original packaging. For defective items, we provide replacements within the warranty period.'
  },
  {
    question: 'Do you offer assembly services?',
    answer: 'Yes, we offer professional PC assembly services for a nominal fee. Our experienced technicians will build your PC with care and attention to detail.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days within Bangladesh. Express shipping options are available for faster delivery.'
  },
  {
    question: 'Are the components covered by warranty?',
    answer: 'Yes, all components come with manufacturer warranty. The warranty period varies by product and manufacturer.'
  },
  {
    question: 'Can you help me choose components for my budget?',
    answer: 'Absolutely! Our PC Builder tool provides recommendations based on your budget and needs. You can also contact our support team for personalized assistance.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;