import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function FootballField() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[20, 30]} />
      <meshStandardMaterial color="#4caf50" />
    </mesh>
  );
}

function Player({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <capsuleGeometry args={[0.3, 1, 4, 8]} />
        <meshStandardMaterial color="#2196f3" />
      </mesh>
      
      {/* Head - Bigger than normal */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffeb3b" />
      </mesh>
    </group>
  );
}

export default function GameScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Game Elements */}
          <FootballField />
          <Player position={[-2, 0, 0]} />
          <Player position={[2, 0, 0]} />
          
          {/* Controls */}
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}