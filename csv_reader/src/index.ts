import { MatchReader } from './composition/MatchReader';
import { CsvFileReader } from './composition/CsvFileReader';
import { MatchResult } from './MatchResult';

// Inheritance index
// const reader = new MatchReader('football.csv');
// reader.read()

// Composition index
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
let manUnitedDraw = 0;

// inheritance for loop
// for (let match of reader.data) {
//   /*some code ...*/
// }

//composition for loop
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  } else if (match[1] === 'Man United' && match[5] === MatchResult.Draw) {
    manUnitedDraw++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Draw) {
    manUnitedDraw++;
  }
}

console.log(`
  Man United won ${manUnitedWins} games this season.
  Man United draw ${manUnitedDraw} games this season.
  `);