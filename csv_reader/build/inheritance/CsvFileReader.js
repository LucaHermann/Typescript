"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs")); // Node std lib File System.
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
            .map(this.mapRow);
        console.log(this.data);
    }
    ;
}
exports.CsvFileReader = CsvFileReader;
;