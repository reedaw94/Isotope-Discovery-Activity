import YAxis from './YAxis';

export default function Floor() {

let canvas = document.createElement("canvas");
const scale = 0.5;

  //Set canvas size
  canvas.width = 1024 * scale;
  canvas.height = 1024 * scale;

    return (
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <YAxis/>
       <gridHelper args = {[200,125, 0xff0000, 'teal']}/>
       {/* <circleGeomety args={[100,'white']}/> */}
        <meshStandardMaterial />
      </mesh>
    )
  }
  