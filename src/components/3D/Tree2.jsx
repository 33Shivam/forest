/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 tree2.gltf --transform
Author: OliverMatheGames (https://sketchfab.com/OliverMatheGames)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/japanese-maple-tree-b6eb627413ed40fdb8b0a1e1c9038fa9
Title: Japanese Maple Tree
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tree2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Leaf_8_Leaves_0.geometry} material={materials.Leaves} />
      <mesh geometry={nodes.Leaf_73_Leaves_0.geometry} material={materials.Leaves} />
      <mesh geometry={nodes.Leaf_49_Leaves_0.geometry} material={materials.Leaves} />
      <mesh geometry={nodes.Leaf_38_Leaves_0.geometry} material={materials.Leaves} />
      <mesh geometry={nodes.Stick_005_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} />
      <mesh geometry={nodes.Stick_007_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} />
      <mesh geometry={nodes.Stick_009_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} />
      <mesh geometry={nodes.Tree_Tree_Mat_0.geometry} material={materials.Tree_Mat} scale={0.113} />
      <mesh geometry={nodes.Leaf_7_Leaves_0.geometry} material={materials.Leaves} position={[-0.506, 0.435, -0.371]} rotation={[-2.234, 0.402, 1.939]} scale={0.058} />
      <mesh geometry={nodes.Stick_004_aiStandardSurface2_0.geometry} material={materials.aiStandardSurface2} position={[-0.375, 0.413, -0.314]} rotation={[0.526, 1.105, 1.156]} scale={[0.149, 0.113, 0.357]} />
    </group>
  )
}

useGLTF.preload('/tree2-transformed.glb')