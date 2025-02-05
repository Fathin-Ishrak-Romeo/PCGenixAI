import { Scene } from '../../../components/3D/Scene';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="card p-8">
            <h1 className="text-5xl font-bold mb-6">
              Build Your Dream PC
            </h1>
            <p className="text-xl mb-8">
              Customize your perfect computer with our expert guidance and quality components
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
                className="bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                Browse Components
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] card p-4">
            <Scene />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;