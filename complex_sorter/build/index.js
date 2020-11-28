"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        // destructuring collection.length with es6 destructuring features.
        const { length } = this.collection;
        // first for loop itearate on the whole collection.
        for (let i = 0; i < length; i++) {
            // second for loop itearate on the collection - the last item because we know he is the greater one so we don't resort it'.
            for (let j = 0; j < length - i - 1; j++) {
                // if loop check if the left item is greater than the right item if yes we swap them.
                if (this.collection[j] > this.collection[j + 1]) {
                    // classic swap method desing for array
                    const tmpLeftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = tmpLeftHand;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0, 54, 2, -67]);
// const sorter = new Sorter(['w', 'a', 'c', 'b',]);
sorter.sort();
console.log(sorter.collection);
