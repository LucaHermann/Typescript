"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./composition/MatchReader");
const CsvFileReader_1 = require("./composition/CsvFileReader");
const MatchResult_1 = require("./MatchResult");
// Inheritance index
// const reader = new MatchReader('football.csv');
// reader.read()
// Composition index
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
let manUnitedDraw = 0;
// inheritance for loop
// for (let match of reader.data) {
//   /*some code ...*/
// }
//composition for loop
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
    else if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.Draw) {
        manUnitedDraw++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.Draw) {
        manUnitedDraw++;
    }
}
console.log(`
  Man United won ${manUnitedWins} games this season.
  Man United draw ${manUnitedDraw} games this season.
  `);
