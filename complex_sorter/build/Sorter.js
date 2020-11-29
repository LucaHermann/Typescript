"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        // destructuring collection.length with es6 destructuring features.
        const { length } = this;
        // first for loop iterate on the whole collection.
        for (let i = 0; i < length; i++) {
            // second for loop itearate on the collection - the last item,
            // because we know he is the greater one so we don't sort it again.
            for (let j = 0; j < length - i - 1; j++) {
                // if loop check if the left item is greater than the right item if yes we swap them.
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
