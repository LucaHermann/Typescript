const drink = {
  color: 'yellow',
  carbonated: true,
  sugar: 10
}

// define the tuple order in a type alias
type Drink = [string, boolean, number];

// heineken use the type alias Drink for give to other developers the order they have to provide the values
const heineken: Drink = ['yellow', true, 10];
//heineken[0] = 10; Type 'number' is not assignable to type 'string'
const corona: Drink = ['light yellow', false, 15];
//const tea: Drink = [false, 10, 'brown']; the type alias Drink is not respected so ts throw us errors

const motoSpecs: [number, number] = [160, 250];
const motoStats = {
  horsePower: 160,
  weight: 250
};