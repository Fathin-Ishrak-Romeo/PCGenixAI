import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PresentationControls, 
  Environment, 
  Float,
  useProgress,
  Html 
} from '@react-three/drei';
import { ComputerModel } from './ComputerModel';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-lg font-bold">
        {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

export const Scene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ 
        height: '500px',
        background: 'transparent',
      }}
    >
      <color attach="background" args={['transparent']} />
      <fog attach="fog" args={['#000000', 5, 15]} />
      
      <Suspense fallback={<Loader />}>
        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <ComputerModel />
          </PresentationControls>
        </Float>
        
        <Environment preset="city" />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
      </Suspense>

      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}