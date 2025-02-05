import { motion } from 'framer-motion';
import { Cpu, Gpu, HardDrive } from 'lucide-react';

const cards = [
  {
    icon: Cpu,
    title: 'Latest CPUs',
    description: 'High-performance processors from top manufacturers'
  },
  {
    icon: Gpu,
    title: 'Powerful GPUs',
    description: 'Gaming and workstation graphics cards'
  },
  {
    icon: HardDrive,
    title: 'Fast Storage',
    description: 'SSDs and HDDs for all your storage needs'
  }
];

const FloatingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ y: 50, opacity: 0 }}
          animate={{ 
            y: [0, -10, 0],
            opacity: 1
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2
            },
            opacity: {
              duration: 0.5,
              delay: index * 0.2
            }
          }}
          className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-xl backdrop-blur-sm"
        >
          <card.icon className="w-12 h-12 text-primary-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCards;