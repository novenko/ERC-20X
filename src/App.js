import './App.scss';
import { Canvas, Dom, useFrame, useThree } from 'react-three-fiber';
import React, { Suspense, useEffect, useState } from "react";
import { Wormhole } from "./components/wormhole/wormhole";
import { Header } from './components/section/header';
import { Token } from './components/section/token';
import { Footer } from './components/section/footer';
import { Landing } from './components/section/landing';
import { Galaxy } from './components/galaxy/galaxy';
import MyText from './components/x/Text';
import { Html } from '@react-three/drei';

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    // camera.position.z = 200 + Math.sin(clock.getElapsedTime()) * 2
    camera.position.y = 10 + Math.sin(clock.getElapsedTime()) * 1
    // camera.rotation.y = Math.sin(clock.getElapsedTime()) * 0.25
  })
  return null
}

const HTMLContent = () => {
  return(
        <group position={[0,-4,0]}>
          <mesh position={[0,0,0]}>
          </mesh>
          <Html center>
            <div className='drei-container'>
            </div>
          </Html>
        </group>
  );
};

const Loading = () => {
  return(
        <Html center>
          <div className='loader'>
            <h3>Loading</h3>
            <div className="planet"></div>
          </div>
      </Html>
  );
};

function App() {

  useEffect(() => {

    function handleScrollYChange() {
      // This one makes the camera move in and out
      console.log("scroll:");
    }

    window.addEventListener("scroll", handleScrollYChange, true);

    return () => {
        window.removeEventListener("scroll", handleScrollYChange);
      };

  }, []);

  return (
    <div className='screen'>
      <div className='main'>
          <Header />
          <Landing />
          <Token />
          <Footer />
      </div>
      <Footer />
      <div className='canvas darkBg'>
        
          <Canvas colorManagement camera={{position:[0,-10,400], fov: 110}} >
            <Suspense fallback={<Loading />}>
                <HTMLContent />
                <Wormhole />
                <Dolly />
                <Galaxy />
                <MyText />
            </Suspense>
          </Canvas>
        
      </div>
    </div>
  );
}
export default App;