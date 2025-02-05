import { useState, useEffect } from 'react';

interface TypingTextProps {
  phrases: string[];
  className?: string;
}

const TypingText = ({ phrases, className = '' }: TypingTextProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className={className}>
      {currentText}<span className="animate-blink">|</span>
    </div>
  );
};

export default TypingText;