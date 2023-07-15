import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import { useSpring } from "@react-spring/core";
import Tree1 from "./Tree1";
import { useRef } from "react";
import ModelDraco from "../ModelDraco.jsx";


const Tree1I = () => {
  


    return (     
    <Canvas>
    <Suspense fallback={null}>
<ModelDraco scale={1} position={[0, -1.3, 0]}/>
<OrbitControls  autoRotate={true} enableZoom={false} />
    </Suspense>    
    <directionalLight intensity={2} position={[1, 1, 1]} />
  </Canvas>
    );
};

export default Tree1I;