import { useRef, useEffect } from 'react'
//import { Canvas } from '@react-three/fiber'
import StringtoMaterial from './IsoStringtoMaterial'
//import {nuclides} from './IsotopesList'

export default function Polyhedron(props) {
  const ref = useRef()
   const mat  = StringtoMaterial('A', 'B', 'C')

  useEffect(() => {
    console.log(ref.current)
  })

  return (
    <mesh {...props} ref={ref} mat={mat}>
      <boxGeometry />
      <meshBasicMaterial/>
    </mesh>
  )

  // return(
  //       nuclides.map((nucleotide, index) => (
  //         <mesh key={index} position={[nucleotide.x, nucleotide.y, 1]}>
  //           <boxGeometry args ={[1,1,.5]}/>
  //           <meshStandardMaterial attach="IsoStringtoMaterial" color={nucleotide.color}/>
  //         </mesh>
      
  //       ))
        
  //   )
}
