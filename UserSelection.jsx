import { useControls } from 'leva'
import { nuclides } from './IsotopesList'
import { elements } from './Elements'
import { useMemo, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { useDrag } from 'react-use-gesture'

function NuclideTile(props) {
  const [position, setPosition] = useState([props.x, props.y])
  const { color, offset } = props
  const canvasRef = useThree((state) => state.gl.domElement)
  const meshRef = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position
      setPosition([x / aspect, -y / aspect, z])
    },
    { pointerEvents: true }
  )

  const movedX = position[0] * (1 + offset)
  const movedY = position[1]
  const isMovedPositionCorrect = nuclides.some((nuclide) => {
    return nuclide.x === movedX && nuclide.y === movedY
  })

  if (isMovedPositionCorrect) {
    console.log('moved position matches correct location')
  } else {
    console.log('moved position does not match')
  }

  return (
    <mesh
      ref={meshRef}
      {...bind()}
      position={[
        Math.min(
          Math.max(position[0] * (1 + offset), -1),
          canvasRef.width - 50
        ),
        Math.min(Math.max(position[1], 0), canvasRef.height - 50),
        1
      ]}
      onClick={(e) => {
        if (bind().active) {
          meshRef.current.material.color.set('white')
          meshRef.current.material.needsUpdate = true
          meshRef.current.scale.set(1.1, 1.1, 1.1)
        } else {
          meshRef.current.material.color.set(color)
          meshRef.current.material.needsUpdate = true
          meshRef.current.scale.set(1, 1, 1)
        }
      }}>
      <boxBufferGeometry args={[1, 1, 0.5]} />
      <meshLambertMaterial color={color} />
    </mesh>
  )
}

export function UserSelection() {
  const controls = useControls({
    selectedElement: {
      label: 'Elements',
      value: elements[1].name,
      options: elements.map((element) => element.name)
    },
    boxOffset: {
      label: 'Box Offset',
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.1
    }
  })

  const selectedNuclides = useMemo(() => {
    const selectedElement = elements.find(
      (element) => element.name === controls.selectedElement
    )

    const selectedNuclides = nuclides.filter(
      (nuclide) => nuclide.abbr === selectedElement.id
    )

    return selectedNuclides
  }, [controls.selectedElement])

  // const handleReset = () => {
  //   // resets tiles to orginal position
  //   console.log('Reset button clicked')
  // }

  // const handleSubmit = () => {
  //   //submission logic
  //   console.log('Submit button clicked')
  // }

  // return (
  //   <>
  //     {selectedNuclides.map((nuclide, index) => (
  //       <NuclideTile
  //         key={index}
  //         x={index}
  //         y={0}
  //         color={nuclide.color}
  //         offset={controls.boxOffset}
  //       />
  //     ))}
  //     <div style={{ position: 'absolute', top: 10, left: 10 }}>
  //       <button onClick={handleReset}>Reset</button>
  //       <button onClick={handleSubmit}>Submit</button>
  //     </div>
  //   </>
  // )

  return selectedNuclides.map((nuclide, index) => (
    <NuclideTile
      key={index}
      x={index}
      y={0}
      color={nuclide.color}
      offset={controls.boxOffset}
    />
  ))
}
export default UserSelection
