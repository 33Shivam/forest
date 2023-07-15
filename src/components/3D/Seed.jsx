import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/seed-transformed.glb');
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5; // Adjust rotation speed as needed
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.MobileD3dOpaque} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/seed-transformed.glb');
