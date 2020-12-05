/**
 * It's not a best practice to create two time the same class with the same logic inside.
 * By using generic we allow this class to have the type we pass at the creation of the class.
 * 
 * ex: new AnythingCollection<string>(['a', 'b']);
 *     new AnythingCollection<number>([1,2,3]);
 */
class NumberCollection {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }
}

class StringCollection {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index];
  }
}

/**
 * Here we use generic <T> for give to a class a more 'flexible' type.
 */
class AnythingCollection<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

// Generics Type inference
const arr0 = new AnythingCollection(['a', 'b', 'c']);
const arr1 = new AnythingCollection([1, 2, 3]);

// Generics Type inference errors
// let arr2 = new AnythingCollection([]);
// arr2 = ([1, 2, 3, 4]); Type 'number[]' is not assignable to type 'AnythingCollection<any>'

/**
 * Same here is not the best implementation to have two time the same logic for two different functions.
 */
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Generics Annotation
printAnything<string>(['a', 'b']);
// Generics Inference
printAnything([1, 2, 3]);

// Generics Constraints

class Car {
  print() {
    console.log('im a car');
  }
}

class House {
  print() {
    console.log('im a house');
  }
}

interface IPrintable {
  print(): void;
}

function printAnyClass<T extends IPrintable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// printAnyClass([1, 2, 3]); Type 'number' is not assignable to type 'IPrintable'
printAnyClass([new Car(), new Car(), new Car, new House(), new House()]);
