import React, { useRef } from "react";
import PlanetMap from '../../assets/textures/earth.jpg';
import CloudsMap from '../../assets/textures/cloud.png';
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { Stars } from '@react-three/drei';


export function Wormhole(props){

    const [planetMap, cloudMap] = useLoader(TextureLoader, [PlanetMap, CloudsMap]);
    
    const planetRef = useRef();
    const cloudsRef = useRef();
    const starRef = useRef();


    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
    
        planetRef.current.rotation.y = elapsedTime / 4;
        cloudsRef.current.rotation.y = elapsedTime / -4;
        starRef.current.rotation.y = elapsedTime / 30;

      });

    return (
    <>
        <ambientLight intensity={0.9} />
        <pointLight color="#f6f3ea" position={[70, 10, 50]} intensity={5} />
        <Stars ref={starRef} radius={300} depth={10} count={10000} factor={9} saturation={5} fade={true} />
        <mesh ref={cloudsRef} position={[0, 0, 0]} >
            <sphereGeometry args={[44, 32, 32]} />
            <meshPhongMaterial
            map={cloudMap}
            opacity={1}
            depthWrite={true}
            transparent={true}
            />
        </mesh>
        <mesh ref={planetRef} position={[0, 0, 0]}>
            <sphereGeometry args={[43, 32, 32]} />
            <meshStandardMaterial map={planetMap} metalness={0.98} roughnes={0.25} />
        </mesh>
    </>
    );
}