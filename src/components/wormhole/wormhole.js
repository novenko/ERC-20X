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
        <pointLight color="#f6f3ea" position={[1000, 20, 600]} intensity={5} />
        <Stars ref={starRef} radius={300} depth={5} count={1000} factor={3} saturation={0.01} fade speed={1} />
        <mesh ref={cloudsRef} position={[0, 0, 0]} >
            <sphereGeometry args={[80, 32, 32]} />
            <meshPhongMaterial
            map={cloudMap}
            opacity={0.5}
            depthWrite={true}
            transparent={true}
            />
        </mesh>
        <mesh ref={planetRef} position={[0, 5, -50]}>
            <sphereGeometry args={[60, 32, 32]} />
            <meshStandardMaterial map={planetMap} metalness={0.98} roughnes={0.25} />
        </mesh>
    </>
    );
}