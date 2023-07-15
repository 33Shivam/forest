import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import { useSpring } from "@react-spring/core";
import Seed from "./Seed";
import { useRef } from "react";


const SeedI = () => {


    return (     
    <Canvas>
    <Suspense fallback={null}>
      <Seed scale={0.3}></Seed>
      {/* <OrbitControls /> */}
    </Suspense>
    <directionalLight intensity={1} position={[0, 1, 1]} />
  </Canvas>
    );
};

export default SeedI;