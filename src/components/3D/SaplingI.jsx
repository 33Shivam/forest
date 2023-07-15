import React, { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "three";
import { useSpring } from "@react-spring/core";
import Sapling from "./Sapling";


const Sapling1 = () => {
  const { position } = useSpring({
    from: { position: [0, 0, 0] },
    to: { position: [Math.sin(Math.PI * 2), 0, 0] },
    loop: true,
    config: { duration: 7000 },
  });


    return (     
        <Canvas>
        <Suspense fallback={null}>
            <Sapling scale={0.02}></Sapling>
        </Suspense>
        {/* <OrbitControls />     */}
        <directionalLight intensity={1} position={[0, 1, 1]} />
      </Canvas>
    );
};

export default Sapling1;