import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';

const stringCollection = new StringCollection('aeZrsGscTwpdFYwuIoBcD');
const numbersCollection = new NumbersCollection([-11, 23, 44, 2, -1009, 2332, -88, 72, 0]);

const sorterNum = new Sorter(numbersCollection);
const sorterString = new Sorter(stringCollection);

sorterNum.sort();
sorterString.sort();

console.log(numbersCollection.data);
console.log(stringCollection.data);