import { useControls } from 'leva'
import { nuclides } from './IsotopesList'
import { elements } from './Elements'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

const vec = new Vector3() // create once and reuse
const pos = new Vector3() // create once and reuse

function NuclideTile(props) {
  const { color, setLockCamera, nuclide, x, y } = props
  const [position, setPosition] = useState([x, y, 1])
  const canvasRef = useThree((state) => state.gl.domElement)

  const meshRef = useRef()

  const isMovedPositionCorrect = useMemo(() => {
    // allow some rooms for misalignment
    return Math.abs(nuclide.x - position[0] && nuclide.y - position[1]) < 0.1
  }, [nuclide.x, nuclide.y, position])

  useEffect(() => {
    if (isMovedPositionCorrect) {
      console.log('moved position matches correct location')
    } else {
      console.log('moved position does not match')
    }
  }, [isMovedPositionCorrect])

  const handlePointerDown = (tEvent) => {
    tEvent.stopPropagation()
    const camera = tEvent.camera

    setLockCamera(true)
    const [x, y] = position
    let initPos = null

    const handleMove = (e) => {
      try {
        vec.set(
          ((e.clientX || e.touches[0].clientX) / window.innerWidth) * 2 - 1,
          -((e.clientY || e.touches[0].clientY) / window.innerHeight) * 2 + 1,
          0.5
        )
        vec.unproject(camera)
        vec.sub(camera.position).normalize()
        const distance = -camera.position.z / vec.z
        pos.copy(camera.position).add(vec.multiplyScalar(distance))
        if (!initPos) initPos = [x - pos.x, y - pos.y]

        const [ix, iy] = initPos
        setPosition([pos.x + ix, pos.y + iy, 1])
      } catch {}
    }

    const handleUnregister = () => {
      canvasRef.removeEventListener('touchmove', handleMove, true)
      canvasRef.removeEventListener('mousemove', handleMove, true)
      setLockCamera(false)
    }

    // add mouse/touch move event to the canvas
    canvasRef.addEventListener('touchmove', handleMove, true)
    canvasRef.addEventListener('mousemove', handleMove, true)

    // clean up when mouseup or touchend, only fire once
    canvasRef.addEventListener('mouseup', handleUnregister, {
      once: true,
      passive: true
    })
    canvasRef.addEventListener('touchend', handleUnregister, {
      once: true,
      passive: true
    })
  }

  return (
    <mesh ref={meshRef} position={position} onPointerDown={handlePointerDown}>
      <boxBufferGeometry args={[1, 1, 0.5]} />
      <meshLambertMaterial color={color} />
    </mesh>
  )
}

export function UserSelection({ setLockCamera }) {
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
    return nuclides.filter((nuclide) => nuclide.abbr === selectedElement.id)
  }, [controls.selectedElement])

  return selectedNuclides.map((nuclide, index) => (
    <NuclideTile
      setLockCamera={setLockCamera}
      key={index}
      x={index}
      y={0}
      nuclide={nuclide}
      color={nuclide.color}
      offset={controls.boxOffset}
    />
  ))
}
export default memo(UserSelection)
