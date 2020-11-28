import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([-10, 23, 44, 2, -1009, 2332, -88, 72]);
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data);