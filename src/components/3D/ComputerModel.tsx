import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

export function ComputerModel() {
  const group = useRef<THREE.Group>(null);
  const robotArm = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (robotArm.current) {
      // Animate robot arm movement
      robotArm.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.2;
      robotArm.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={group}>
      {/* Workbench */}
      <Box args={[4, 0.2, 2]} position={[0, -1.5, 0]}>
        <meshStandardMaterial color="#444444" metalness={0.5} roughness={0.2} />
      </Box>

      {/* PC Case being built */}
      <Box args={[2, 3, 1]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Robot Base */}
      <Cylinder args={[0.5, 0.7, 0.5, 32]} position={[-2, -1.2, 0]}>
        <meshStandardMaterial color="#1e90ff" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Robot Body */}
      <group ref={robotArm} position={[-2, 0, 0]}>
        {/* Main Arm */}
        <Box args={[0.2, 1.5, 0.2]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#4169e1" metalness={0.8} roughness={0.2} />
        </Box>

        {/* Robot Head */}
        <Sphere args={[0.3, 32, 32]} position={[0, 1.5, 0]}>
          <meshStandardMaterial 
            color="#000000" 
            emissive="#00ff00"
            emissiveIntensity={0.5}
          />
        </Sphere>

        {/* Robot Arm Joints */}
        <group position={[0.4, 0.8, 0]}>
          <Sphere args={[0.15, 32, 32]}>
            <meshStandardMaterial color="#4169e1" metalness={0.9} roughness={0.1} />
          </Sphere>
          <Box args={[0.8, 0.15, 0.15]} position={[0.4, 0, 0]}>
            <meshStandardMaterial color="#4169e1" metalness={0.8} roughness={0.2} />
          </Box>
          <Sphere args={[0.1, 32, 32]} position={[0.8, 0, 0]}>
            <meshStandardMaterial color="#4169e1" metalness={0.9} roughness={0.1} />
          </Sphere>
        </group>

        {/* Robot Tool */}
        <Box args={[0.1, 0.1, 0.1]} position={[1.2, 0.8, 0]}>
          <meshStandardMaterial 
            color="#ff0000" 
            emissive="#ff0000"
            emissiveIntensity={0.5}
          />
        </Box>
      </group>

      {/* PC Components on the workbench */}
      {[...Array(4)].map((_, i) => (
        <Box 
          key={i}
          args={[0.3, 0.1, 0.2]} 
          position={[1.5 - i * 0.4, -1.3, 0.5]}
        >
          <meshStandardMaterial 
            color={`hsl(${i * 30}, 70%, 50%)`} 
            metalness={0.5} 
            roughness={0.5}
          />
        </Box>
      ))}

      {/* Holographic Display */}
      <group position={[1.5, 0, 0]}>
        <Box args={[0.8, 0.8, 0.02]} rotation={[0, -Math.PI / 6, 0]}>
          <meshStandardMaterial
            color="#00ffff"
            transparent
            opacity={0.3}
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </Box>
      </group>
    </group>
  );
}