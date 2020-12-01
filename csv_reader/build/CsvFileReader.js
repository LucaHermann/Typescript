"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs")); // Node std lib File System.
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf8',
            flag: 'r+'
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((row) => {
            /*
             * row[0] = date,
             * row[1] = home team,
             * row[2] = away team,
             * row[3] = home team score,
             * row[4] = away team score,
             * row[5] = Match result,
             * row[6] = match referee
             */
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
    ;
}
exports.CsvFileReader = CsvFileReader;
;
