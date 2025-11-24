import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

const BeerModel = () => {
  const model = useLoader(GLTFLoader, "/src/assets/soap.glb");
  const ref = useRef<THREE.Object3D>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  useEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.isObject3D) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [model]);

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={[0.4, 0.4, 0.4]}
      position={[0, -0.4, 0]}
    />
  );
};

const StyledBeer = styled.div`
  width: 800px;
  height: 700px;
`;

export default function Beer() {
  return (
    <StyledBeer>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={1.2} />

        <directionalLight position={[3, 3, 3]} intensity={2} castShadow />

        <pointLight position={[-3, -1, 2]} intensity={1.5} />
        <BeerModel />
      </Canvas>
    </StyledBeer>
  );
}
