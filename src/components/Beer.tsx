import {
  Canvas,
  useFrame,
  useLoader,
  type ThreeElements,
} from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

const BeerModel = () => {
  const model = useLoader(FBXLoader, "/src/assets/water_bottle.fbx");
  const ref = useRef<ThreeElements["primitive"]>(null);

  useFrame((_, delta) => {
    if (ref.current) {
    }
  });

  useEffect(() => {
    model.traverse((obj) => {
      if (obj.isObject3D) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [model]);

  return (
    <primitive
      ref={ref}
      object={model}
      scale={[0.4, 0.4, 0.4]}
      position={[0, -1.2, 2]}
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
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={2} castShadow />
        <pointLight position={[-3, -1, 2]} intensity={1.5} />
        <BeerModel />
        <OrbitControls />
      </Canvas>
    </StyledBeer>
  );
}
