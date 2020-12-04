"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieReader = void 0;
class MovieReader {
    constructor(reader) {
        this.reader = reader;
        this.movies = [];
    }
    load() {
        this.reader.read();
        this.movies = this.reader.data.map((row) => {
            return [
                row[0],
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                parseInt(row[5]),
                row[6],
                parseInt(row[7])
            ];
        });
    }
}
exports.MovieReader = MovieReader;
