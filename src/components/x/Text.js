import React, { useMemo, useRef } from "react";
// import { useControls } from "leva";
import { useLoader, extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'


function MyText() {
  extend({ TextGeometry })
  const ref = useRef()
  const ref2 = useRef()
  
  const params =  {
    size: 50,
    height: 20,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 10,
    curveSegments: 5,
    wireframe: false,
    flatShading: true,
  }
  const params2 =  {
    size: 15,
    height: 1,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.03,
    bevelOffset: 0,
    bevelSegments: 3,
    curveSegments: 10,
    color: '#000000',
    wireframe: false,
    flatShading: false,
  }

  const font = useLoader(FontLoader, '/typefaces/inter.typeface.json')
  const config = useMemo(() => ({
    font,
    ...params,
  }), [font, params])
  const config2 = useMemo(() => ({
    font,
    ...params2
  }), [font, params2])

  return (
    <>
      <mesh ref={ref} position={[-125, -50, 150]}>
        <textGeometry args={['X-COIN', config]} />
        <meshNormalMaterial flatShading={true} wireframe={false} />
      </mesh>
      <mesh ref={ref2} position={[-50, -75, 150]}>
        <textGeometry args={['the everyXing coin', config2]} />
        <meshStandardMaterial flatShading={false} wireframe={false} color={'black'} />
      </mesh>

    </>
  )
}

export default MyText;
