import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sapling-transformed.glb');
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Sm_Sapling_01__0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  );
}

useGLTF.preload('/sapling-transformed.glb');
