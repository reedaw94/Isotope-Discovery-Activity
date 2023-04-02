
import { useControls } from 'leva';
import {nuclides} from './IsotopesList';
import {elements} from './Elements';
import { Text } from '@react-three/drei';


// const R = '#f00'
// const G = '#0f0'
// const B = '#00f'

function NuclideTile(props) {
  const { x, y, color, abbr} = props;
  return (
    <mesh position={[x, y, 1]}>
        <mesh >
            <boxBufferGeometry args={[1, 1, .5]} />
            <meshLambertMaterial color={color} />
        </mesh>
        <Text position={[x,y,0.7]}
            fontSize={0.3} color="red">
                {abbr}
            </Text>
    </mesh>
    
  );
}

function UserSelection() {
//   const elements = [
//     { num: 1, id: 'H', name: 'Hydrogen', mass: '1.01', x: 1, y: 10 },
//     { num: 2, id: 'He', name: 'Helium', mass: '4.00', x: 2, y: 10 },
//     {num: 3, id:'Li', name:'Lithium', mass:'6.94', x:1, y:9,},

//   ];
<>
<elements/>
<nuclides/>
</>
//   const nuclides = [
//     {x:0,y:1,abbr: 'H', color:G},
//     {x:1,y:1,abbr: 'H', color:G},
//     {x:2,y:1,abbr: 'H', color:B},
//     {x:3,y:1,abbr: 'H', color:R},
//     {x:4,y:1,abbr: 'H', color:R},
//     {x:5,y:1,abbr: 'H', color:R},
//     {x:6,y:1,abbr: 'H', color:R},
//     //Helium
//     {x:1,y:2, abbr: 'He',color:G},
//     {x:2,y:2, abbr: 'He',color:G},
//     {x:3,y:2, abbr: 'He',color:R},
//     {x:4,y:2, abbr: 'He',color:R},
//     {x:5,y:2, abbr: 'He',color:R},
//     {x:6,y:2, abbr: 'He',color:R},
//     {x:7,y:2, abbr: 'He',color:R},
//     {x:8,y:2, abbr: 'He',color:R},

//     {x:1,y:3, abbr: 'Li',color:R},
//     {x:2,y:3, abbr: 'Li',color:R},
//     {x:3,y:3, abbr: 'Li',color:G},
//     {x:4,y:3, abbr: 'Li',color:G},
//     {x:5,y:3, abbr: 'Li',color:R},
//     {x:6,y:3, abbr: 'Li',color:R},
//     {x:7,y:3, abbr: 'Li',color:R},
//     {x:8,y:3, abbr: 'Li',color:R},

//   ];

const controls = useControls({
    selectedElement: { label: "Elements", value: elements[1].name, options: elements },
  });

  const selectedNuclides = nuclides.filter(
    (nuclide) => nuclide.abbr === controls.selectedElement.id
  );

//   const controls = useControls({
//     elementIndex: {
//         label: 'Element', value: 0, options: elements.map((element) => ({label:element.name})),
//     },
// });
// let selectedNuclides = []

// console.log(elements)

  return (
        selectedNuclides.map((nuclide, index) => ( 
          <NuclideTile
            key={index}
            x={nuclide.x}
            y={nuclide.y}
            color={nuclide.color}
            abbr={nuclide.abbr}
          />
        ))
  );
}

export default UserSelection;
