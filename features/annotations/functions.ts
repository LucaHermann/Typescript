// type annotations for functions
const addition = (a: number, b: number) => {
  return a + b;
}
// ts guess by inference the return type of the function add

const sub = (a: number, b: number): number => {
  return a - b;
}
// ts don't have to use inference because whe have give the annotation of the return type

// annotation for classic function
function div(a: number, b: number): number {
  return a / b;
}

// annotation for annonymous function
const multiply = function(a: number, b: number): number {
  return a * b;
}

// void mean the function not returning anything
const logger = (message: string): void => {
  console.log(message);
  // return("OK"); ts throw the error Type 'string' is not assignable to type 'void'
}

// the type of return is never bc the end of function never gonna be reached
const throwError = (message: string): never => {
  throw new Error(message);
}

// here we got a return type so even by throwing an error i have to specify the type of the return value
const throwMessageError = (message: string): string => {
  if (!message) {
    throw new Error('there is no message');
  }
  return message;
}

const forecast = {
  date: new Date(),
  weatherType: 'rain'
};

// using destructuring method with annotation
const logWeather = ({ 
  date, 
  weatherType
} : {
  date: Date,
  weatherType: string 
}): void => {
  console.log(date);
  console.log(weatherType);
}

logWeather(forecast);