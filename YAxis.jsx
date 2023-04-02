import { Text } from '@react-three/drei';

export default function YAxis() {
  const EleList = ['Oganesson',
    'Tennessine', 'Livermorium','Moscovium', 'Flerovium',
    'Nihonium', 'Copernicium', 'Roentgenium', 'Darmstadtium',
    'Meitnerium', 'Hassium', 'Bohrium', 'Seaborgium', 'Dubnium', 'Rutherfordium',
    'Lawrencium', 'Nobelium','Mendelevium','Fermium','Einsteinium',
    'Californium', 'Berkelium', 'Curium', 'Americium', 'Plutonium', 'Neptunium',
    'Uranium', 'Protactinium', 'Thorium', 'Actinium', 'Radium', 'Francium',
    'Radon', 'Astatine', 'Polonium', 'Bismuth', 'Lead', 'Thallium', 'Mercury',
    'Gold', 'Platinum', 'Iridium', 'Osmium', 'Rhenium', 'Tungsten', 'Tantalum',
    'Hafnium', 'Lutetium', 'Ytterbium', 'Thulium', 'Erbium', 'Holmium', 'Dysprosium',
    'Terbium', 'Gadolinium', 'Europium', 'Samarium', 'Promethium', 'Neodymium', 'Praseodymium',
    'Cerium', 'Lanthanum', 'Barium', 'Cesium', 'Xenon', 'Iodine', 'Tellurium', 'Antimony',
    'Tin', 'Indium', 'Cadmium', 'Silver', 'Palladium', 'Rhodium', 'Ruthenium', 'Technetium',
    'Molybdenum', 'Niobium', 'Zirconium', 'Yttrium', 'Strontium', 'Rubidium', 'Krypton', 'Bromine',
    'Selenium', 'Arsenic', 'Germanium', 'Gallium', 'Zinc', 'Copper', 'Nickel', 'Cobalt', 'Iron', 'Manganese',
    'Chromium', 'Vanadium', 'Titanium', 'Scandium', 'Calcium', 'Potassium', 'Argon', 'Chlorine', 'Sulfur',
    'Phosphorus', 'Silicon', 'Aluminum', 'Magnesium', 'Sodium', 'Neon', 'Fluorine',
    'Oxygen', 'Nitrogen', 'Carbon', 'Boron', 'Beryllium','Lithium', 'Helium', 'Hydrogen', 'Neutron'
    ];

    const EleAbbr = ['Og', 'Ts', 'Lv', 'Mc', 'Fl', 'Nh', 'Cn', 'Rg', 'Ds', 'Mt', 'Hs', 'Bh', 'Sg', 'Db', 'Rf', 'Lr', 'No',
        'Md', 'Fm', 'Es', 'Cf', 'Bk', 'Cm', 'Am', 'Pu', 'Np', 'U', 'Pa', 'Th', 'Ac', 'Ra', 'Fr', 'Rn', 'At', 'Po', 'Bi',
        'Pb', 'Tl', 'Hg', 'Au', 'Pt', 'Ir', 'Os', 'Re', 'W', 'Ta', 'Hf', 'Lu', 'Yb', 'Tm', 'Er', 'Ho', 'Dy', 'Tb',
        'Gd', 'Eu', 'Sm', 'Pm', 'Nd', 'Pr', 'Ce', 'La', 'Ba', 'Cs', 'Xe', 'I', 'Te', 'Sb', 'Sn', 'In', 'Cd', 'Ag', 'Pd',
        'Rh', 'Ru', 'Tc', 'Mo', 'Nb', 'Zr', 'Y', 'Sr', 'Rb', 'Kr', 'Br','Se', 'As', 'Ge', 'Ga', 'Zn', 'Cu', 'Ni', 'Co',
        'Fe', 'Mn', 'Cr', 'V', 'Ti', 'Sc', 'Ca', 'K', 'Ar', 'Cl', 'S','P','Si', 'Al', 'Mg','Na','Ne','F','O','N', 'C',
        'B', 'Be', 'Li', 'He', 'H','n'    
        ];

  const ElementComponents = [];
  for (let i = 0; i < EleList.length; i++) {
    ElementComponents.push(
      <Text
        key={i}
        position={[-20,0, (i * -2)+100]} // position text with increasing z values
        color="red"
        fontSize={1}
        rotation={[Math.PI/2,0,0]}
      >
        {EleList[i]}
      </Text>
    );
  }

  const abbrComponents = [];
  for (let i = 0; i < EleAbbr.length; i++) {
    abbrComponents.push(
      <Text
        key={i}
        position={[-10,0, (i * -2)+100]} // position text with increasing z values
        color="red"
        fontSize={1}
        rotation={[Math.PI/2,0,0]}
      >
        {EleAbbr[i]}
      </Text>
    );
  }

  const numbComponents = [];
  for (let i = 0; i < 118; i++) {
    numbComponents.push(
      <Text
        key={i}
        position={[-5,0, (i * -2)+100]} // position text with increasing z values
        color="red"
        fontSize={1}
        rotation={[Math.PI/2,0,0]}
      >
        {[i]}
      </Text>
    );
  }

  return (
    <>
      {ElementComponents}
      {abbrComponents}
      {numbComponents}

    </>
   
  );
}
