import { useState, useEffect } from 'react';
import { Scene } from '../components/3D/Scene';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    { text: 'Welcome to ', highlight: 'PCGenixAI', style: 'from-blue-500 to-purple-500' },
    { text: 'Build Your Dream PC with the Help of ', highlight: 'AI', style: 'from-green-500 to-teal-500' }
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentMessage = messages[messageIndex].text + messages[messageIndex].highlight;
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      } else {
        setCurrentText(currentMessage.slice(0, currentText.length + 1));
        if (currentText === currentMessage) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, messageIndex]);

  const renderText = (text: string) => {
    const currentMessage = messages[messageIndex];
    const baseText = currentMessage.text;
    const highlightText = currentMessage.highlight;
    const style = currentMessage.style;

    if (text.length <= baseText.length) {
      return (
        <span className="font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {text}
        </span>
      );
    }

    return (
      <>
        <span className="font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {baseText}
        </span>
        <span className={`font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${style}`}>
          {text.slice(baseText.length)}
        </span>
      </>
    );
  };

  return (
    <div className="relative min-h-screen">
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-[120px] flex items-center">
                <h1 className="text-4xl font-bold">
                  {renderText(currentText)}
                  <span className="w-[1px] h-8 bg-gradient-to-b from-purple-500 to-pink-500 inline-block animate-blink ml-1">
                  </span>
                </h1>
              </div>
              <p className="text-xl">
                Experience the future of PC building with AI-powered recommendations and expert guidance.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/build-pc"
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  Start Building
                </Link>
                <Link
                  to="/shop"
                  className="bg-white/20 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  Browse Components
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Scene />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;