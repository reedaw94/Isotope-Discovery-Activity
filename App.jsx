//import Polyhedron from './Polyhedron'
//import * as THREE from 'three'
import { Stats, OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
//import { useControls } from 'leva'
import Floor from './Floor'
import UserSelection from './UserSelection'

export default function App() {

  return (
    <Canvas>
      <UserSelection/>
      {/* <Polyhedron/> */}
       {/* <Scene/> */}
      <ambientLight/>
      <pointLight position={[10, 10, 10]} />
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}/> 
      <Floor />
      <axesHelper args={[5]} />
      <Stats />
      <Stars/>
    </Canvas>
    
  )
}
