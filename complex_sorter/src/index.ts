import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkedListCollection } from './LinkedListCollection'

const stringCollection = new StringCollection('aeZrsGscTwpdFYwuIoBcD');
const numbersCollection = new NumbersCollection([-13, 23, 44, 2, -1009, 2332, -88, 72, 0]);
const linkedListCollection = new LinkedListCollection();

linkedListCollection.add(-2);
linkedListCollection.add(2);
linkedListCollection.add(-12);
linkedListCollection.add(123);
linkedListCollection.add(0);
linkedListCollection.add(45);
linkedListCollection.add(-200);
linkedListCollection.add(23);

const sorterNum = new Sorter(numbersCollection);
const sorterString = new Sorter(stringCollection);
const sortLinkedList = new Sorter(linkedListCollection);

sorterNum.sort();
sorterString.sort();
sortLinkedList.sort();

console.log('Numbers:', numbersCollection.data);
console.log('Strings:', stringCollection.data);
linkedListCollection.print();