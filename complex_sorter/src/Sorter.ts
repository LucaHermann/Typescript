export interface ISortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: ISortable) { }

  sort(): void {
    // destructuring collection.length with es6 destructuring features.
    const { length } = this.collection;
    // first for loop iterate on the whole collection.
    for (let i = 0; i < length; i++) {
      // second for loop itearate on the collection - the last item,
      // because we know he is the greater one so we don't sort it again.
      for (let j = 0; j < length - i - 1; j++) {
        // if loop check if the left item is greater than the right item if yes we swap them.
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}