import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import type { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar";

const Cube = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number];
  color: string;
}) => {
  const ref = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    ref.current!.rotation.x += delta;
    ref.current!.rotation.y += delta * 2;
    ref.current!.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number];
  color: string;
}) => {
  const ref = useRef<Mesh | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current!.rotation.x += delta * speed;
    ref.current!.rotation.y += delta * speed;
    /* ref.current!.position.z = Math.sin(state.clock.elapsedTime) * 2; */
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial
        color={isHovered ? "orange" : "blue"}
        wireframe={true}
      />
    </mesh>
  );
};

const Torus = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number];
  color: string;
}) => {
  const ref = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    ref.current!.rotation.x += delta;
    ref.current!.rotation.y += delta * 2;
    ref.current!.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TorusKnot = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number];
  color: string;
}) => {
  const ref = useRef<Mesh | null>(null);

  /* useFrame((state, delta) => {
    ref.current!.rotation.x += delta;
    ref.current!.rotation.y += delta * 2;
    ref.current!.position.z = Math.sin(state.clock.elapsedTime) * 2;
  }); */

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} wireframe={true} />
    </mesh>
  );
};

function App() {
  return (
    <div>
      {/* <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />
        <TorusKnot
          position={[0, 0, 3.3]}
          color={"green"}
          size={[0.5, 0.1, 30]}
        />
        <OrbitControls enableRotate={true} />
      </Canvas> */}
      <Navbar />
    </div>
  );
}

export default App;
