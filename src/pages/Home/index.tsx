import { motion } from 'framer-motion';
import { Scene } from '../../components/3D/Scene';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, HardDrive, Gpu } from 'lucide-react';
import AnimatedText from './components/AnimatedText';
import TypingText from '../../components/TypingText';
import FloatingCards from './components/FloatingCards';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <TypingText 
                phrases={['Welcome to PCGenixAI']}
                className="text-5xl font-bold"
              />
              <TypingText 
                phrases={['Build Your Dream PC with the Help of AI']}
                className="text-2xl text-primary-500"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl"
              >
                Experience the future of PC building with AI-powered recommendations and expert guidance.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4"
              >
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
              </motion.div>
            </div>
            <div className="relative h-[500px]">
              <Scene />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedText 
            text="Why Choose PCGenixAI"
            className="text-3xl font-bold text-center mb-12"
          />
          <FloatingCards />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Monitor, title: 'Expert Guidance', desc: 'Get personalized recommendations' },
              { icon: Cpu, title: 'Quality Parts', desc: 'Premium components only' },
              { icon: HardDrive, title: 'Custom Builds', desc: 'Tailored to your needs' },
              { icon: Gpu, title: 'Performance', desc: 'Optimized for your usage' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <feature.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white/10 backdrop-blur-sm p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your PC?</h2>
            <p className="text-xl mb-8">Let's create your perfect computer together</p>
            <Link
              to="/build-pc"
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;