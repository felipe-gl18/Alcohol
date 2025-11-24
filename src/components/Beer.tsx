import { Canvas, useLoader, type ThreeElements } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

const BeerModel = () => {
  const model = useLoader(FBXLoader, "/assets/water_bottle.fbx");
  const ref = useRef<ThreeElements["primitive"]>(null);

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
  width: 100%;
  height: 700px;
  position: relative;
  min-width: 0;
`;

export default function Beer() {
  return (
    <StyledBeer>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={2} castShadow />
        <pointLight position={[-3, -1, 2]} intensity={1.5} />
        <BeerModel />
        <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} />
      </Canvas>
    </StyledBeer>
  );
}
