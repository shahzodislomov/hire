"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function TechPet() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftEarRef = useRef<THREE.Mesh>(null);
  const rightEarRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 2) * 0.1;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }

    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 3) * 0.1;
      headRef.current.rotation.y = Math.cos(t * 2.5) * 0.1;
    }

    if (leftEarRef.current && rightEarRef.current) {
      leftEarRef.current.rotation.z = Math.sin(t * 8) * 0.1 + 0.2;
      rightEarRef.current.rotation.z = -Math.sin(t * 8) * 0.1 - 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={bodyRef} position={[0, -0.5, 0]}>
          <capsuleGeometry args={[0.6, 0.8, 4, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </mesh>

        <group ref={headRef} position={[0, 0.8, 0]}>
          <mesh>
            <boxGeometry args={[1.2, 1, 1.2]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </mesh>

          <mesh position={[0, 0, 0.61]}>
            <planeGeometry args={[0.9, 0.5]} />
            <meshStandardMaterial color="#0a0a0e" />
          </mesh>

          <mesh position={[-0.2, 0, 0.62]}>
            <circleGeometry args={[0.1, 16]} />
            <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} />
          </mesh>
          <mesh position={[0.2, 0, 0.62]}>
            <circleGeometry args={[0.1, 16]} />
            <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} />
          </mesh>

          <mesh ref={leftEarRef} position={[-0.6, 0.6, 0]}>
            <coneGeometry args={[0.15, 0.6, 16]} />
            <meshStandardMaterial color="#6a0dad" metalness={0.8} />
          </mesh>

          <mesh ref={rightEarRef} position={[0.6, 0.6, 0]}>
            <coneGeometry args={[0.15, 0.6, 16]} />
            <meshStandardMaterial color="#6a0dad" metalness={0.8} />
          </mesh>
        </group>

        <mesh rotation-x={Math.PI / 2} position={[0, -0.5, 0]}>
          <torusGeometry args={[1.5, 0.02, 16, 64]} />
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function CastleDiorama() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#6a0dad" />
          <pointLight position={[10, 0, -10]} intensity={1} color="#ff00ff" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          <TechPet />

          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2 + 0.1}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </div>
    </div>
  );
}
