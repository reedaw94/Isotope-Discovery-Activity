//import { MeshLambertMaterial } from "three";
//import StringtoMaterial from "./StringtoMaterial";

const R = '#f00'
const G = '#0f0'
const B = '#00f'
const W = '#fff'
const elements = [
    {num: 1, id:'N', name: 'neutron', mass:'1.01', x:1, y:10, isotopes: [G,G,B,R,R,R,R]},
    {num: 1, id:'H', name: 'Hydrogen', mass:'1.01', x:1, y:10, isotopes: [G,G,B,R,R,R,R]},
    {num: 2, id:'He', name:'Helium', mass:'4.03', x:18, y:10, isotopes: [G,G,R,R,R,R,R,R]},

    {num: 3, id:'Li', name:'Lithium', mass:'6.94', x:1, y:9, isotopes: [R,R,G,G,R,R,R,R]},
    {num: 4, id:'Be', name:'Beryllium', mass:'9.01',x:2, y:9, isotopes: [R,B,R,G,B,B,R,R,R]},
    {num: 5, id:'B', name:'Boron', mass:'10.81', x:13, y:9, isotopes: [R,R,R,G,G,R,R,R,R,R,R]},
    {num: 6, id:'C', name:'Carbon', mass:'12.01', x:14, y:9, isotopes: [R,R,B,B,G,G,B,B,R,R,R,R,R]},
    {num: 7, id:'N', name:'Nitrogen', mass:'14.0', x:15, y:9, isotopes: [R,R,R,B,G,G,B,B,R,R,R,R,R,R]},
    {num: 8, id:'O', name:'Oxygen', mass:'15.99', x:16, y:9, isotopes: [R,R,B,B,G,G,G,B,B,B,B,R,R]},
    {num: 9, id:'F', name:'Fluorine', mass:'18.99',x: 17, y:9, isotopes: [R,R,B,B,G,B,B,B,B,R,R,R,R,R,R]},
    {num: 10, id:'Ne', name:'Neon', mass:'20.17', x:18, y:9, isotopes: [R,R,B,B,G,G,G,B,B,R,R,R,R,R,R,R,R,R,R]},

    {num: 11, id:'Na', name:'Sodium', mass:'22.98', x:1, y:8, isotopes: [R,R,B,B,G,B,B,B,R,R,R,R,R,R,R,R,R,R,R]},
    {num: 12, id:'Mg', name:'Magnesium', mass:'24.30', x:2, y:8, isotopes: [R,R,R,B,B,G,G,G,B,B,B,R,R,R,R,R,R,R,R,R,R]},
    {num: 13, id:'Al', name:'Aluminium', mass:'26.98', x:13, y:8, isotopes: [R,R,B,B,B,G,B,B,B,R,R,R,R,R,R,R,R,R,R,R,R,R]},
    {num: 14, id:'Si', name:'Silicon', mass:'28.08', x:14, y:8, isotopes: [R,R,R,R,B,B,G,G,G,B,G,B,B,B,B,B,B,R,R,R,R,R,R,R,R,R,R]},
    {num: 15, id:'P', name:'Phosphorus', mass:'30.97', x:15, y:8, isotopes: [R,R,R,B,B,G,B,B,B,B,B,B,R,R,R,R,R,R,R,R,R]},
    {num: 16, id:'S', name:'Sulfur', mass:'32.06', x:16, y:8, isotopes: [R,R,R,B,B,G,G,G,B,G,B,B,B,B,B,B,R,R,R,R,R,R]},
    {num: 17, id:'Cl', name:'Chlorine', mass:'35.45', x:17, y:8, isotopes: [R,R,B,B,G,B,G,B,B,B,B,B,B,R,R,R,R,R,R,R]},
    {num: 18, id:'Ar', name:'Argon', mass:'39.94', x:18, y:8, isotopes: [R,R,R,R,B,G,B,G,B,G,B,B,B,B,B,B,B,R,R,R,R]},

    {num: 19, id:'K', name:'Potassium', mass:'39.94', x:1, y:7, isotopes: [R,R,B,B,G,B,G,B,B,B,B,B,B,B,B,R,R,R,R,R]},
    {num: 20, id:'Ca', name:'Calcium', mass:'40.07', x:2, y:7, isotopes: [R,R,R,R,R,G,B,G,G,G,B,G,B,G,B,B,B,B,R,R,R,R]},
    {num: 21, id:'Sc', name:'Scandium', mass:'44.95', x:3, y:7, isotopes: [R,R,R,B,B,B,G,B,B,B,B,B,B,B,R,R,R,R,R,R]},
    {num: 22, id:'Ti', name:'Titanium', mass:'47.86', x:4, y:7, isotopes: [R,R,R,R,R,B,B,G,G,G,G,G,B,B,B,B,R,R,R,R,R,R,R]},
    {num: 23, id:'V', name:'Vanadium', mass:'50.94', x:5, y:7, isotopes: [R,R,R,R,B,B,B,B,G,B,B,B,B,R,R,R,R,R,R,R,R,R]},
    {num: 24, id:'Cr', name:'Chromium', mass:'51.99', x:6, y:7, isotopes: [R,R,R,R,R,R,B,B,G,B,G,G,G,B,B,B,B,B,R,R,R,R,R,R,R,R]},
    {num: 25, id:'Mn', name:'Manganese', mass:'54.93', x:7, y:7, isotopes: [R,R,R,R,B,B,B,B,B,G,B,B,B,B,B,R,R,R,R,R,R,R,R,R]},
    {num: 26, id:'Fe', name:'Iron', mass:'55.84', x:8, y:7, isotopes: [R,R,R,R,R,R,R,B,B,G,B,G,G,G,B,B,B,B,B,B,R,R,R,R,R,R,R,R]},
    {num: 27, id:'Co', name:'Cobalt', mass:'58.93', x:9, y:7, isotopes: [R,R,R,R,B,B,B,B,B,G,B,B,B,B,B,B,R,R,R,R,R,R,R,R,R,R]},
    {num: 28, id:'Ni', name:'Nickel', mass:'58.69', x:10, y:7, isotopes: [R,R,R,R,R,R,R,R,B,B,G,B,G,G,G,B,G,B,B,B,B,B,B,B,B,R,R,R,R,R,R]},
    {num: 29, id:'Cu', name:'Copper', mass:'63.54', x:11, y:7, isotopes: [R,R,R,B,B,B,B,B,G,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R]},
    {num: 30, id:'Zn', name:'Zinc', mass:'65.38', x:12, y:7, isotopes: [R,R,R,R,R,R,B,B,B,B,G,B,G,G,G,B,G,B,B,B,B,B,B,B,B,B,R,R,R,R]},
    {num: 31, id:'Ga', name:'Gallium', mass:'69.72',  x:13, y:7, isotopes: [R,R,R,B,B,B,B,B,B,G,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R]},
    {num: 32, id:'Ge', name:'Germanium', mass:'72.63', x:14, y:7, isotopes: [R,R,R,R,B,B,B,B,B,B,G,B,G,G,G,B,G,B,B,B,B,B,B,B,R,R,R,R,R,R]},
    {num: 33, id:'As', name:'Arsenic', mass:'74.92',  x:15, y:7, isotopes: [R,R,R,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R]},
    {num: 34, id:'Se', name:'Selenium', mass:'78.96', x:16, y:7, isotopes: [R,R,R,R,B,B,B,B,B,G,G,B,G,G,G,B,G,B,G,B,B,B,B,B,B,R,R,R,R,R,R]},
    {num: 35, id:'Br', name:'Bromine', mass:'79.90',  x:17, y:7, isotopes: [R,R,B,B,B,B,B,B,B,B,G,B,G,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R]},
    {num: 36, id:'Kr', name:'Krypton', mass:'83.79', x:18 , y:7, isotopes: [R,R,R,B,B,B,B,B,B,G,B,G,B,G,G,G,B,G,B,B,B,B,B,B,B,R,R,R,R,R,R,R]},

    {num: 37, id:'Rb', name:'Rubidium', mass:'85.46', x:1, y:6, isotopes: [R,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R]},
    {num: 38, id:'Sr', name:'Strontium', mass:'87.6', x:2, y:6, isotopes: [R,R,R,B,B,B,B,B,B,B,B,G,B,G,G,G,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R,R]},
    {num: 39, id:'Y', name:'Yttrium', mass:'88.90', x:3, y:6, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R]},
    {num: 40, id:'Zr', name:'Zirconium', mass:'91.22', x:4, y:6, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,G,G,G,B,G,B,G,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R]},
    {num: 41, id:'Nb', name:'Niobium', mass:'92.90', x:5, y:6, isotopes: [R,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R]},
    {num: 42, id:'Mo', name:'Molybdenum', mass:'95.96', x:6, y:6, isotopes: [R,B,B,B,B,B,B,B,B,G,B,G,G,G,G,G,B,B,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R]},
    {num: 43, id:'Tc', name:'Technetium', mass:'(98)', x:7, y:6, isotopes: [R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R,R]},
    {num: 44, id:'Ru', name:'Ruthenium', mass:'101.07', x:8, y:6, isotopes: [R,B,B,B,B,B,B,B,B,G,B,G,G,G,G,G,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R]},
    {num: 45, id:'Rh', name:'Rhodium', mass:'102.90',  x:9, y:6, isotopes: [R,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R]},
    {num: 46, id:'Pd', name:'Palladium', mass:'106.42', x:10, y:6, isotopes: [R,B,B,B,B,B,B,B,B,B,B,G,B,G,G,G,B,G,B,G,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R]},
    {num: 47, id:'Ag', name:'Silver', mass:'107.86', x:11, y:6, isotopes: [R,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R,R,R]},
    {num: 48, id:'Cd', name:'Cadmium', mass:'112.41', x:12, y:6, isotopes: [B,B,B,B,B,B,B,B,B,G,B,G,B,G,G,G,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R]},
    {num: 49, id:'In', name:'Indium', mass:'114.81', x:13, y:6, isotopes: [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,R,R]},
    {num: 50, id:'Sn', name:'Tin', mass:'118.71', x:14, y:6, isotopes: [B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,G,G,G,G,G,G,B,G,G,B,B,B,B,B,B,B,B,B,B,B,R,R,R]},
    {num: 51, id:'Sb', name:'Antimony', mass:'121.76', x:15, y:6, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R]},
    {num: 52, id:'Te', name:'Tellurium', mass:'127.6', x:16, y:6, isotopes: [R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,G,G,G,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R]},
    {num: 53, id:'I', name:'Iodine', mass:'126.90', x:17, y:6, isotopes: [R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R]},
    {num: 54, id:'Xe', name:'Xenon', mass:'131.29', x:18, y:6, isotopes: [R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,G,G,G,G,G,B,G,B,G,B,B,B,B,B,B,R,R,R,R,R]},

    {num: 55, id:'Cs', name:'Caesium', mass:'132.90', x:1, y:5, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R]},
    {num: 56, id:'Ba', name:'Barium', mass:'132.90', x:2, y:5, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,G,G,G,G,B,B,B,B,B,B,B,B,R,R,R,R,R]},
    {num: 57, id:'La', name:'Lanthanum', mass:'138.90', x:3, y:2.5, isotopes: [R,W,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R,R]},

    {num:58, id:'Ce', name:'Cerium', mass:'140.12', x:4 , y:2.5, isotopes: [B,R,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,G,B,G,B,B,B,B,B,B,B,B,B,B,R,R,R]},
    {num:59, id:'Pr', name:'Praseodymium', mass:'140.91', x:5 , y:2.5, isotopes: [R,W,W,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:60, id:'Nd', name:'Neodymium', mass:'144.24', x:6 , y:2.5, isotopes: [R,R,B,R,B,B,B,B,B,B,B,B,B,B,B,B,B,G,G,B,G,G,B,G,B,G,B,B,B,B,B,B]},
    {num:61, id:'Pm', name:'Promethium', mass:'(145)', x:7 , y:2.5, isotopes: [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:62, id:'Sm', name:'Samarium', mass:'150.36', x:8 , y:2.5, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,G,G,B,G,B,G,B,B,B,B,B,B,B,B]},
    {num:63, id:'Eu', name:'Europium', mass:'151.96', x:9 , y:2.5, isotopes: [R,R,W,W,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,B,B,B,B,B,B,B,B,R,R,R]},
    {num:64, id:'Gd', name:'Gadolinium', mass:'157.25', x:10 , y:2.5, isotopes: [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,G,G,G,G,B,G,B,B,B,B,B,B]},
    {num:65, id:'Tb', name:'Terbium', mass:'158.93', x:11 , y:2.5, isotopes: [R,W,W,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,]},
    {num:66, id:'Dy', name:'Dysprosium', mass:'162.5', x:12 , y:2.5, isotopes: [R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,G,G,G,G,G,B,B,B,B]},
    {num:67, id:'Ho', name:'Holmium', mass:'164.93', x:13 , y:2.5, isotopes: [R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B]},
    {num:68, id:'Er', name:'Erbium', mass:'167.26', x:14 , y:2.5, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,G,G,G,B,G,B,B,B,B,B]},
    {num:69, id:'Tm', name:'Thulium', mass:'168.93', x:15 , y:2.5, isotopes: [R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,]},
    {num:70, id:'Yb', name:'Ytterbium', mass:'173.05', x:16 , y:2.5, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,G,G,G,G,B,G,B,B,B,B]},
    {num:71, id:'Lu', name:'Lutetium', mass:'174.97', x:17 , y:2.5, isotopes: [R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,]},

    {num: 72, id:'Hf', name:'Hafnium', mass:'178.49', x:4, y:5, isotopes: [B,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,G,G,G,G,B,B,B,B,B,B,R,R]},
    {num: 73, id:'Ta', name:'Tantalum', mass:'180.94', x:5,y:5, isotopes: [R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,R,R,R]},
    {num: 74, id:'W', name:'Tungsten', mass:'183.84', x:6, y:5, isotopes: [R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,G,G,B,G,B,B,B,B,R,R]},
    {num: 75, id:'Re', name:'Rhenium', mass:'186.20', x:7, y:5, isotopes: [R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,R,R,R]},
    {num: 76, id:'Os', name:'Osmium', mass:'190.23', x:8, y:5, isotopes: [R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,G,G,G,B,G,B,B,B,B,B]},
    {num: 77, id:'Ir', name:'Iridium', mass:'192.21', x:9, y:5, isotopes: [R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,B,B,B,B]},
    {num: 78, id:'Pt', name:'Platinum', mass:'195.08', x:10, y:5, isotopes: [R,R,R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B.B,B,B,B,B,B,B,G,B,G,G,G,B,G,B,B,B,R]},
    {num: 79, id:'Au', name:'Gold', mass:'196.96', x:11, y:5, isotopes: [R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B]},
    {num: 80, id:'Hg', name:'Mercury', mass:'200.59', x:12, y:5, isotopes: [R,R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,G,G,G,G,B,G,B,B,B,B,B,R]},
    {num: 81, id:'Tl', name:'Thallium', mass:'204.38', x:13, y:5, isotopes: [R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,B,B,B,B,B,R,R]},
    {num: 82, id:'Pb', name:'Lead', mass:'207.2', x:14, y:5, isotopes: [R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,G,G,G,B,B,B,B,B,B,B]},
    {num: 83, id:'Bi', name:'Bismuth', mass:'208.98', x:15, y:5, isotopes: [R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,G,B,B,B,B,B,B,B,B,B,]},
    {num: 84, id:'Po', name:'Polonium', mass:'(209)', x:16, y:5, isotopes: [R,R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,B,B,R,R]},
    {num: 85, id:'At', name:'Astatine', mass:'(210)', x:17, y:5, isotopes: [R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,B,B,B,B,B,B]},
    {num: 86, id:'Rn', name:'Radon', mass:'(222)', x:18, y:5, isotopes: [R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B]},

    {num: 87, id:'Fr', name:'Francium', mass:'(223)', x:1, y:4, isotopes: [R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num: 88, id:'Ra', name:'Radium', mass:'(226)', x:2, y:4, isotopes: [R,R,R,R,R,R,B,B,B,B,B,B,B,B,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num: 89, id:'Ac', name:'Actinium', mass:'(227)', x:3, y:1.5, isotopes: [R,R,R,R,R,R,R,R,B,R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,R]},

    {num:90, id:'Th', name:'Thorium', mass:'232.04', x:4 , y:1.5, isotopes: [R,R,R,R,R,R,B,R,R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:91, id:'Pa', name:'Protactinium', mass:'231.06', x:5 , y:1.5, isotopes: [R,R,R,R,R,R,R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:92, id:'U', name:'Uranium', mass:'238.03', x:6 , y:1.5, isotopes: [R,R,R,R,R,R,R,R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,W,B]},
    {num:93, id:'Np', name:'Neptunium', mass:'(237)', x:7 , y:1.5,  isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,]},
    {num:94, id:'Pu', name:'Plutonium', mass:'(244)', x:8 , y:1.5, isotopes: [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:95, id:'Am', name:'Americium', mass:'(243)', x:9 , y:1.5, isotopes: [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,]},
    {num:96, id:'Cm', name:'Curium', mass:'(247)', x:10 , y:1.5, isotopes: [R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:97, id:'Bk', name:'Berkelium', mass:'(247)', x:11 , y:1.5, isotopes: [B,R,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:98, id:'Cf', name:'Californium', mass:'(251)', x:12 , y:1.5, isotopes: [B,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:99, id:'Es', name:'Einstenium', mass:'(252)', x:13 , y:1.5, isotopes: [B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:100, id:'Fm', name:'Fermium', mass:'(257)', x:14 , y:1.5, isotopes: [R,R,R,R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:101, id:'Md', name:'Mendelevium', mass:'(258)', x:15 , y:1.5, isotopes: [R,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B]},
    {num:102, id:'No', name:'Nobelium', mass:'(259)', x:16 , y:1.5, isotopes: [R,R,B,B,B,B,B,B,B,B,B,B,B,R,R,R,R,R]},
    {num:103, id:'Lr', name:'Lawrencium', mass:'(262)', x:17 , y:1.5, isotopes: [R,R,B,B,B,R,B,B,B,B,B,R,R,R,B]},

    {num: 104, id:'Rf', name:'Rutherfordium', mass:'(267)', x:4, y:4, isotopes: [R,R,B,B,B,B,R,B,B,B,B,B,R,R,R,B]},
    {num: 105, id:'Db', name:'Dubnium', mass:'(268)', x:5, y:4, isotopes: [B,B,B,B,R,B,B,B,B,R,R,R,B,B,R,R]},
    {num: 106, id:'Sg', name:'Seaborgium', mass:'(271)', x:6, y:4, isotopes: [R,R,R,R,R,B,R,B,B,R,R,R,R,B,R,R]},
    {num: 107, id:'Bh', name:'Bohrium', mass:'(272)', x:7, y:4, isotopes: [R,R,R,R,B,R,B,B,R,R,B,R,B,R,R,R]},
    {num: 108, id:'Hs', name:'Hassium', mass:'(270)',  x:8, y:4, isotopes: [R,R,R,R,R,R,B,B,R,R,R,R,R,R,R]},
    {num: 109, id:'Mt', name:'Meitnerium', mass:'(276)',  x:9, y:4, isotopes: [R,R,R,R,R,R,R,R,R,R,R,R,R,B,R]},
    {num: 110, id:'Ds', name:'Darmstadium', mass:'(281)', x:10, y:4, isotopes: [R,R,R,R,R,R,R,R,R,R,R,R,R,R,B]},
    {num: 111, id:'Rg', name:'Roentgenium', mass:'(280)',  x:11, y:4, isotopes: [R,R,R,R,R,R,R,B,B,B,R]},
    {num: 112, id:'Cn', name:'Copernicium', mass:'(285)',  x:12, y:4, isotopes: [R,R,R,R,R,R,R,R,R,R]},
    {num: 113, id:'Nh', name:'Nihonium', mass:'(286)',  x:13, y:4, isotopes: [R,R,R,R,R,R,R,R,B,R]},
    {num: 114, id:'Fl', name:'Flerovium', mass:'(289)',  x:14, y:4, isotopes: [R,R,R,R,R,B]},
    {num: 115, id:'Mc', name:'Moscovium', mass:'(290)',  x:15, y:4, isotopes: [R,R,R,R,R]},
    {num: 116, id:'Lv', name:'Livermorium', mass:'(293)',  x:16, y:4, isotopes: [R,R,R,R,R]},
    {num: 117, id:'Ts', name:'Tennessine', mass:'(294)', x:17, y:4, isotopes: [R,R,R,R]},
    {num: 118, id:'Og', name:'Oganesson', mass:'(294)', x:18, y:4, isotopes: [R]}
];

// let textures = [];
// for(let i=0;i<elements.length;i++) {
//     textures.push(StringtoMaterial(elements[i].id, W, elements[i].mass, i+1))
// }

// export {elements, textures}

export {elements}