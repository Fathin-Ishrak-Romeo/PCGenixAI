import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Float,
  useProgress,
  Html,
  Effects,
  BakeShadows,
  ContactShadows
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
      dpr={[1, 2]}
      camera={{ position: [-2.5, 1.5, 3.5], fov: 35, near: 0.1, far: 100 }}
      style={{ 
        height: '400px',
        background: 'transparent',
      }}
    >
      <color attach="background" args={['#111111']} />
      <fog attach="fog" args={['#111111', 5, 15]} />
      
      <Suspense fallback={<Loader />}>
        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          floatingRange={[-0.1, 0.1]}
        >
          <group rotation={[0, -0.4, 0]} position={[0, 0.3, 0]}>
            <ComputerModel />
          </group>
        </Float>
        
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <spotLight
          position={[0, 5, 2]}
          angle={0.25}
          penumbra={1}
          intensity={1}
          castShadow
          color="#ffffff"
          shadow-bias={-0.0001}
        />
        <pointLight position={[0, 3, 0]} intensity={0.3} color="#ffffff" />
        
        {/* Contact shadows for realism */}
        <ContactShadows
          position={[0, -0.7, 0]}
          opacity={0.5}
          scale={10}
          blur={2.5}
          far={4}
          resolution={512}
          smooth
        />

        <Effects />
        <BakeShadows />
      </Suspense>

      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        minDistance={3}
        maxDistance={8}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}