import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Torus, Box } from "@react-three/drei";
import * as THREE from "three";

const FloatingGeometry = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.2;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.5;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.2;
      boxRef.current.rotation.z = time * 0.3;
    }
  });

  return (
    <group>
      {/* Main Torus */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Torus ref={torusRef} args={[1.5, 0.5, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Torus>
      </Float>

      {/* Floating Sphere */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere ref={sphereRef} args={[0.8, 32, 32]} position={[-3, 1, -2]}>
          <meshStandardMaterial
            color="#B026FF"
            emissive="#B026FF"
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.7}
          />
        </Sphere>
      </Float>

      {/* Floating Box */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Box ref={boxRef} args={[1, 1, 1]} position={[3, -1, -1]}>
          <meshStandardMaterial
            color="#00FFFF"
            emissive="#00FFFF"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.9}
          />
        </Box>
      </Float>

      {/* Additional small spheres */}
      <Float speed={4} rotationIntensity={0.3} floatIntensity={1}>
        <Sphere args={[0.3, 16, 16]} position={[2, 2, 1]}>
          <meshStandardMaterial
            color="#FF00FF"
            emissive="#FF00FF"
            emissiveIntensity={0.6}
          />
        </Sphere>
      </Float>

      <Float speed={3.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <Sphere args={[0.4, 16, 16]} position={[-2, -2, 0]}>
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#B026FF" />
        <FloatingGeometry />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
