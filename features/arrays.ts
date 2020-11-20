// array annotation
const motoMakers: string[] = ['ducati', 'suzuki', 'honda'];

// if you initialize an empty array always put a type annotation bc if you dont put it the type gonna be any
// wrong usage:
let carMaker = [];
carMaker = ['peugeot', 'renault']
// good usage:
const boatMaker: string[] = [];

// array filled with objects
const dates = [new Date(), new Date()];

// 2 dimensions array inference
const motoByMake = [
  ['superstrada'],
  ['gsxr1000'],
  ['450four']
];

// 2 dimensions array annotation
const carByMake: string[][] = [];

// Help with inference when extracting values
const moto = motoMakers[1];
const myMoto = motoMakers.pop();

// prevent incompatible values
motoMakers.push(1001); // ts throw the error Argument of type 'number' is not assignable to parameter of type 'string'

// Help with 'map'
motoMakers.map((moto: string): string => {return moto.toUpperCase()});

// Flexible types
//inferrence
const importantDates = [new Date(), '2021-10-10'];

//annotations
const nonImportantDates: (Date | string)[] = [new Date()];
nonImportantDates.push('2020-10-10');