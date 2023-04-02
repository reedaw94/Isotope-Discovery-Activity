
import { useDrag } from 'react-use-gesture'
import { useState, useRef } from 'react'
import Polyhedron from './Polyhedron'

export default function Tiles(props) {
  const meshRef = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const bind = useDrag(({ down, movement: [x, y] }) => {
    setActive({x: 0, y:0})
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerDown={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...bind()}
      scale={active ? [1.1, 1.1, 1.1] : [1, 1, 1]}
    >
      <Polyhedron />
      <meshStandardMaterial color={hovered ? 'royalblue' : 'pink'} />
    </mesh>
  )
}


