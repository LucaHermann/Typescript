/**
 * The export {} is a helper for avoid the error: 
 *    'Cannot redeclare block-scoped variable 'name'.ts(2451)
 *    lib.dom.d.ts(19484, 15): 'name' was also declared here.
 */
export {}; 

/**
 * Variables
 */
let apples: number = 5;
apples = 10;
// apples = '10'; error throw by ts = Type 'string' is not assignable to type 'number'
let pears = 5; // type inference work here bc the declaration is on one line
let annanas; // no type inference here bc the declaration is on two line. ts throw the error = Variable 'annanas' implicitly has an 'any' type, but a better type may be inferred from usage
annanas = 10;

let name: string = 'Luca';
name = 'Luquita';
// name = true; error throw by ts = Type 'boolean' is not assignable to type 'string'

let hasName: boolean = false;
hasName = true;
// hasName = 'true'; error throw by ts = Type 'string' is not assignable to type 'boolean'

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date();

/*  
 * Array
 */
let colors: string[] = ['red', 'blue', 'green'];
colors = ['black', 'white', 'grey'];

let myLotteryNumbers: number[] = [0, 22, 3, 11];

let truths: boolean[] = [false, true, false];

/* 
 * Classes
 */
class Car {}
const ferrari: Car = new Car();

/* 
 * Object Literal
 */
let points: { x: number; y: number } = {
  x: 0,
  y: 0
};
points.x;
// points.x = 'ten'; error throw by ts = Type 'string' is not assignable to type 'number'
// points.a = 10; error throw by ts = Property 'a' does not exist on type '{ x: number; y: number; }'

/**
 * Functions
 */
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}
// logNumber('a'); error throw by ts = Argument of type 'string' is not assignable to parameter of type 'number'

/* 
 * When to use type annotations instead of inference
 */

// 1) Function that return 'any' type
const json = '{"x": 1, "y": 2}';
const coords: { x: number, y: number } = JSON.parse(json)
console.log(coords);

// 2) When we declare variable on one line 
// and initalize it later

let words = ['cat', 'dog', 'frog'];
// let foundWord; this is bad beacause the type is 'any'
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'frog') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [10, -1, 3444];
let numberAboveZero: boolean | number = false; // the boolean | number means it's can be on or the other type

for (let i; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
