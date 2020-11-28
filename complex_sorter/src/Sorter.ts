import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) { }

  sort(): void {
    // destructuring collection.length with es6 destructuring features.
    const { length } = this.collection;
    // first for loop itearate on the whole collection.
    for (let i = 0; i < length; i++) {
      // second for loop itearate on the collection - the last item because we know he is the greater one so we don't resort it'.
      for (let j = 0; j < length - i - 1; j++) {
        // ONLY WORK IF COLLECTION IS number[].
        // if loop check if the left item is greater than the right item if yes we swap them.
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}