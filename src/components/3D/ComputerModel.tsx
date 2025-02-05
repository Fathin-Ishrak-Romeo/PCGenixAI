import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder, RoundedBox, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

export function ComputerModel() {
  const group = useRef<THREE.Group>(null);
  const robotRef = useRef<THREE.Group>(null);
  const leftHandRef = useRef<THREE.Group>(null);
  const rightHandRef = useRef<THREE.Group>(null);
  const interfaceRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (robotRef.current && leftHandRef.current && rightHandRef.current && interfaceRef.current) {
      const t = state.clock.elapsedTime;
      
      // Robot body gentle floating animation
      const targetRotationX = Math.sin(t * 0.3) * 0.03;
      robotRef.current.rotation.x = THREE.MathUtils.lerp(
        robotRef.current.rotation.x,
        targetRotationX,
        0.05
      );

      const targetPositionY = Math.sin(t * 0.2) * 0.015;
      robotRef.current.position.y = THREE.MathUtils.lerp(
        robotRef.current.position.y,
        targetPositionY,
        0.05
      );

      // Interface pulsing effect
      interfaceRef.current.children.forEach((child, index) => {
        if (child.type === 'Group') {
          const pulseSpeed = 0.5;
          const pulseIntensity = 0.1;
          child.position.z = Math.sin(t * pulseSpeed + index) * pulseIntensity;
        }
      });

      // Hands touching screen animation
      const touchSpeed = 1;
      const touchRange = 0.15;
      
      // Left hand screen interaction
      const leftHandPos = Math.sin(t * touchSpeed) * touchRange;
      leftHandRef.current.position.x = leftHandPos;
      leftHandRef.current.position.y = Math.cos(t * touchSpeed) * (touchRange * 0.5);
      leftHandRef.current.rotation.z = leftHandPos * 0.5;
      
      // Right hand screen interaction (different pattern)
      const rightHandPos = Math.sin(t * touchSpeed * 1.3 + 1) * touchRange;
      rightHandRef.current.position.x = -rightHandPos;
      rightHandRef.current.position.y = Math.sin(t * touchSpeed * 0.7) * (touchRange * 0.5);
      rightHandRef.current.rotation.z = -rightHandPos * 0.5;
    }
  });

  // UI Elements data
  const uiElements = [
    { text: "System Status: Online", position: [0.7, 0.5, 0.01], color: "#00ff00" },
    { text: "CPU: 3.8 GHz", position: [0.7, 0.3, 0.01], color: "#00aaff" },
    { text: "Memory: 32GB", position: [0.7, 0.1, 0.01], color: "#00aaff" },
    { text: "GPU: RTX 4080", position: [0.7, -0.1, 0.01], color: "#00aaff" },
    { text: "Storage: 2TB", position: [0.7, -0.3, 0.01], color: "#00aaff" }
  ];

  return (
    <group ref={group}>
      {/* Transparent Glass Panel with Interface */}
      <group position={[0, 0, 0.8]} rotation={[0.2, Math.PI, 0]}>
        {/* Main Glass Panel */}
        <RoundedBox args={[2, 1.5, 0.05]} radius={0.05}>
          <meshPhysicalMaterial
            transparent
            opacity={0.2}
            roughness={0}
            metalness={0}
            transmission={0.9}
            thickness={0.05}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </RoundedBox>

        {/* Interface Elements */}
        <group ref={interfaceRef}>
          {/* UI Text Elements */}
          {uiElements.map((element, index) => (
            <group key={index} position={element.position}>
              <Text
                color={element.color}
                fontSize={0.08}
                maxWidth={1}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign="right"
                anchorX="right"
              >
                {element.text}
              </Text>
            </group>
          ))}

          {/* Interactive Elements */}
          {[...Array(3)].map((_, i) => (
            <group key={`button-${i}`} position={[-0.5, 0.4 - i * 0.3, 0.01]}>
              <RoundedBox args={[0.4, 0.15, 0.02]} radius={0.02}>
                <meshStandardMaterial
                  color="#0066cc"
                  emissive="#0066cc"
                  emissiveIntensity={0.5}
                  transparent
                  opacity={0.8}
                />
              </RoundedBox>
              <Text
                color="white"
                fontSize={0.06}
                position={[0, 0, 0.02]}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
              >
                {["SCAN", "ANALYZE", "OPTIMIZE"][i]}
              </Text>
            </group>
          ))}

          {/* Progress Bars */}
          {[...Array(2)].map((_, i) => (
            <group key={`progress-${i}`} position={[-0.5, -0.2 - i * 0.2, 0.01]}>
              <RoundedBox args={[0.4, 0.05, 0.01]} radius={0.01}>
                <meshStandardMaterial color="#333333" />
              </RoundedBox>
              <RoundedBox 
                args={[0.38 * (0.3 + Math.random() * 0.7), 0.03, 0.02]} 
                position={[0.01 * (1 - (0.3 + Math.random() * 0.7)), 0, 0.01]} 
                radius={0.01}
              >
                <meshStandardMaterial
                  color="#00ff00"
                  emissive="#00ff00"
                  emissiveIntensity={0.5}
                />
              </RoundedBox>
            </group>
          ))}
        </group>
      </group>

      {/* Main Robot */}
      <group ref={robotRef} position={[0, 0, 0]} rotation={[0.3, 0, 0]}>
        {/* Head */}
        <group position={[0, 0.6, 0]}>
          <RoundedBox args={[0.5, 0.6, 0.4]} radius={0.15}>
            <meshStandardMaterial color="#f0f0f0" metalness={0.9} roughness={0.1} />
          </RoundedBox>

          {/* Face Details */}
          <RoundedBox args={[0.45, 0.3, 0.05]} position={[0, 0, 0.2]} radius={0.1}>
            <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
          </RoundedBox>

          {/* Eyes */}
          {[-0.15, 0.15].map((x) => (
            <group key={x} position={[x, 0.05, 0.22]}>
              <Torus args={[0.06, 0.01, 32, 32]}>
                <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
              </Torus>
              <Sphere args={[0.04, 32, 32]} position={[0, 0, 0.01]}>
                <meshStandardMaterial
                  color="#000000"
                  emissive="#00aaff"
                  emissiveIntensity={0.5}
                />
              </Sphere>
            </group>
          ))}

          {/* Head Panels */}
          {[-1, 1].map((x) => (
            <RoundedBox
              key={x}
              args={[0.1, 0.4, 0.3]}
              position={[x * 0.2, 0, 0]}
              radius={0.05}
            >
              <meshStandardMaterial color="#e8e8e8" metalness={0.8} roughness={0.2} />
            </RoundedBox>
          ))}
        </group>

        {/* Neck */}
        <Cylinder args={[0.1, 0.15, 0.2, 32]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </Cylinder>

        {/* Torso */}
        <group position={[0, -0.2, 0]}>
          <RoundedBox args={[0.8, 1, 0.4]} radius={0.2}>
            <meshStandardMaterial color="#f0f0f0" metalness={0.9} roughness={0.1} />
          </RoundedBox>

          {/* Body Details */}
          {[...Array(3)].map((_, i) => (
            <RoundedBox
              key={i}
              args={[0.6, 0.05, 0.42]}
              position={[0, 0.2 - i * 0.2, 0]}
              radius={0.01}
            >
              <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
            </RoundedBox>
          ))}
        </group>

        {/* Arms */}
        {[-1, 1].map((side, index) => (
          <group key={side} position={[side * 0.4, 0, 0]}>
            {/* Shoulder */}
            <Sphere args={[0.12, 32, 32]} position={[0, 0.1, 0]}>
              <meshStandardMaterial color="#e0e0e0" metalness={0.9} roughness={0.1} />
            </Sphere>

            {/* Upper Arm */}
            <RoundedBox
              args={[0.15, 0.4, 0.15]}
              position={[0, -0.15, 0]}
              radius={0.05}
            >
              <meshStandardMaterial color="#f0f0f0" metalness={0.9} roughness={0.1} />
            </RoundedBox>

            {/* Elbow */}
            <Sphere args={[0.08, 32, 32]} position={[0, -0.35, 0]}>
              <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
            </Sphere>

            {/* Forearm */}
            <RoundedBox
              args={[0.12, 0.4, 0.12]}
              position={[0, -0.6, 0]}
              radius={0.04}
            >
              <meshStandardMaterial color="#f0f0f0" metalness={0.9} roughness={0.1} />
            </RoundedBox>

            {/* Hand */}
            <group 
              position={[0, -0.8, 0.4]} 
              ref={index === 0 ? leftHandRef : rightHandRef}
            >
              <RoundedBox args={[0.2, 0.1, 0.1]} radius={0.03}>
                <meshStandardMaterial color="#e0e0e0" metalness={0.9} roughness={0.1} />
              </RoundedBox>
              {/* Touch Point Indicator */}
              <Sphere args={[0.02, 16, 16]} position={[0, -0.05, 0.05]}>
                <meshStandardMaterial
                  color="#00ffff"
                  emissive="#00ffff"
                  emissiveIntensity={0.5}
                />
              </Sphere>
            </group>
          </group>
        ))}

        {/* Logo */}
        <RoundedBox args={[0.3, 0.08, 0.01]} position={[0, 0, 0.21]} radius={0.02}>
          <meshStandardMaterial color="#0066cc" metalness={0.7} roughness={0.3} />
        </RoundedBox>
      </group>

      {/* Enhanced Lighting */}
      <pointLight position={[-2, 2, 2]} intensity={0.2} color="#ff4000" />
      <pointLight position={[2, 2, -2]} intensity={0.2} color="#0040ff" />
      <spotLight
        position={[0, 3, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
      />
    </group>
  );
}