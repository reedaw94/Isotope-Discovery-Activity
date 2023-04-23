import React from 'react'
import { Stats, Stars, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { useControls, button } from 'leva'
import Floor from './Floor'
import UserSelection from './UserSelection'
//import CameraControls from './CameraControls'

// const Scene = () => {
//   const cameraRef = useRef()
//   const controlsRef = useRef()

//   useFrame(() => {
//     controlsRef.current.update()
//   })

//   //Use Leva to manage GUI
//   const { panX, panY } = useControls('Controls', {
//     panX: { value: 0, step: 1, min: -100, max: 100 },
//     panY: { value: 0, step: 1, min: -100, max: 100 },
//     zoomIn: button(() => {
//       cameraRef.current.position.z -= 0.1
//     }),
//     zoomOut: button(() => {
//       cameraRef.current.position.z += 0.1
//     })
//   })

//   useFrame(() => {
//     //update the camera position based on the Leva GUI
//     controlsRef.current.target.x = panX
//     controlsRef.current.target.y = panY
//   })
//   return (
//     <>
//       <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
//       <OrbitControls ref={controlsRef} args={[cameraRef.current]} />
//     </>
//   )
// }

function App() {
  const [lockCamera, setLockCamera] = React.useState(false)

  return (
    <Canvas>
      {/* <Scene /> */}
      {/* <CameraControls /> */}
      <UserSelection setLockCamera={setLockCamera} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <OrbitControls
        enablePan={!lockCamera}
        enableRotate={!lockCamera}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />

      <Floor />
      <axesHelper args={[5]} />
      <Stats />
      <Stars />
    </Canvas>
  )
}

export default App
