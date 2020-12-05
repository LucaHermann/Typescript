"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
class MovieReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            row[0],
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            parseInt(row[5]),
            row[6],
            parseInt(row[7]),
        ];
    }
}
exports.MovieReader = MovieReader;
