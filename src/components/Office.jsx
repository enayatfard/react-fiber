import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF("./models/WawaOffice.glb");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
      <mesh
        geometry={nodes["02_library"].geometry}
        material={materials["02"]}
        position={[0, 2.11, -2.23]}
      />
      <mesh
        geometry={nodes["03_attic"].geometry}
        material={materials["03"]}
        position={[-1.97, 4.23, -2.2]}
      />
    </group>
  );
}

useGLTF.preload("./models/WawaOffice.glb");
