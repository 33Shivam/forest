import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/manure-transformed.glb');
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.HandRake_HandRake_0.geometry} material={materials.HandRake} rotation={[-2.384, 0.517, -0.031]} scale={0.025} />
    </group>
  );
}

useGLTF.preload('/manure-transformed.glb');
