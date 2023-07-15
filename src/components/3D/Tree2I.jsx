import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import { useSpring } from "@react-spring/core";
import Tree2 from "./Tree2";
import { useRef } from "react";


const Tree2I = () => {
  


    return (     
    <Canvas>
    <Suspense fallback={null}>
<Tree2 scale={2}></Tree2>      
    </Suspense>    
    <directionalLight intensity={1} position={[0, 1, 1]} />
  </Canvas>
    );
};

export default Tree2I;