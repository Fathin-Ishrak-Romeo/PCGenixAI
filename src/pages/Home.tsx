import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Environment } from '@react-three/drei';
import { ComputerModel } from '../components/3D/ComputerModel';

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

    const timer = setTimeout(
      type, 
      isDeleting ? deletingSpeed : typingSpeed
    );
    
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
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [5, 2, 5], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1}
            castShadow
          />
          <pointLight 
            position={[-10, -10, -10]} 
            color="#2020ff"
            intensity={0.5}
          />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <ComputerModel />
          </PresentationControls>
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      <div className="container relative mx-auto px-4 py-8">
        <div className="h-[120px] flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            {renderText(currentText)}
            <span className="w-[1px] h-8 bg-gradient-to-b from-purple-500 to-pink-500 inline-block animate-blink ml-1">
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;