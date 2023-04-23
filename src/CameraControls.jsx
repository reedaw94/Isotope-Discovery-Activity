import React, { useRef, useState } from 'react'
import { useThree, useFrame } from '@react-three/fiber'

function CameraControls() {
  const { camera } = useThree()
  const cameraRef = useRef(camera)
  const [movement, setMovement] = useState({
    up: false,
    down: false,
    left: false,
    right: false
  })

  // Update camera position based on key presses
  useFrame(() => {
    const speed = 0.1 // Adjust speed as needed

    if (cameraRef.current) {
      if (movement.up) {
        cameraRef.current.position.y += speed
      }
      if (movement.down) {
        cameraRef.current.position.y -= speed
      }
      if (movement.left) {
        cameraRef.current.position.x -= speed
      }
      if (movement.right) {
        cameraRef.current.position.x += speed
      }
      cameraRef.current.lookAt(0, 0, 0)
    }
  })

  // Handler for button click to move camera up
  const handleMoveUp = () => {
    setMovement({ ...movement, up: true })
  }

  // Handler for button click to move camera down
  const handleMoveDown = () => {
    setMovement({ ...movement, down: true })
  }

  // Handler for button click to move camera left
  const handleMoveLeft = () => {
    setMovement({ ...movement, left: true })
  }

  // Handler for button click to move camera right
  const handleMoveRight = () => {
    setMovement({ ...movement, right: true })
  }

  // Handler for button release to stop camera movement
  const handleButtonRelease = () => {
    setMovement({ up: false, down: false, left: false, right: false })
  }

  return (
    <>
      {/* Add buttons for camera movement */}
      <button onMouseDown={handleMoveUp} onMouseUp={handleButtonRelease}>
        Move Up
      </button>
      <button onMouseDown={handleMoveDown} onMouseUp={handleButtonRelease}>
        Move Down
      </button>
      <button onMouseDown={handleMoveLeft} onMouseUp={handleButtonRelease}>
        Move Left
      </button>
      <button onMouseDown={handleMoveRight} onMouseUp={handleButtonRelease}>
        Move Right
      </button>
    </>
  )
}

export default CameraControls
