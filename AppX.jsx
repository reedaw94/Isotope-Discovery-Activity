import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import {useMemo} from 'react'
import { Stats, OrbitControls } from '@react-three/drei'
import {useControls} from 'leva'

export default function App() {
  const polyhedron = useMemo(
    () => [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ],
  []
  )

  const options = useMemo(() =>{
    return{
      x:{value:0, min:0, max: Math.PI*2, step:0.01},
      y:{value:0, min:0, max: Math.PI*2, step:0.01},
      z:{value:0, min:0, max: Math.PI*2, step:0.01},
      visible: true,
      color: {value: 'lime'},
    }
  }, [])

  const pA = useControls('Polyhedron A', options)
  const pB = useControls('polyhedron B', options)
  const pC = useControls('polyhedron C', options)
  const pD = useControls('polyhedron D', options)

  // const color = useControls({
  //   value:'green',
  // })

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
        {/* <color attach ="background" args={[color.value]}/> */}
      <Polyhedron
           position={[-2, 0, -9]}
           rotation={[pA.x, pA.y, pA.z]}
           visible={pA.visible}
           color={pA.color}
          polyhedron={polyhedron} />
      <Polyhedron
          position={[7, 1, 3]}
          rotation={[pB.x, pB.y, pB.z]}
          visible={pB.visible}
          color={pB.color}
          polyhedron={polyhedron} />
      <Polyhedron 
          position={[5, -2, 1]}
          rotation={[pC.x, pC.y, pC.z]}
          visible={pC.visible}
          color={pC.color}
          polyhedron={polyhedron} />
      <Polyhedron 
          position={[-4, -9, 3]} 
          rotation={[pD.x, pD.y, pD.z]}
          visible={pD.visible}
          color={pD.color}
          polyhedron={polyhedron} />
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}/>
    <axesHelper args = {[5]} />
    <gridHelper args = {[200,180, 0xff0000, 'teal']}/>
      <Stats />
    </Canvas>
  )
}
