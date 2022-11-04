import React, { useMemo, useRef } from "react";
// import { useControls } from "leva";
import { useLoader, extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'


function MyText() {
  extend({ TextGeometry })
  const ref = useRef()
  
  const params =  {
    size: 150,
    height: 25,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 10,
    curveSegments: 5,
    wireframe: false,
    flatShading: true,
  }

  const font = useLoader(FontLoader, '/typefaces/inter.typeface.json')
  const config = useMemo(() => ({
    font,
    ...params
    
  }), [font, params])

  return (
    <>
      <mesh ref={ref} position={[-450, 100, -50]}>
        <textGeometry args={['X-TOKEN', config]} />
        <meshNormalMaterial flatShading={true} wireframe={false} />
      </mesh>

    </>
  )
}

export default MyText;
