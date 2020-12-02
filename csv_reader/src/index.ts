import { MatchReader } from './inheritance/MatchReader';
import { MovieReader } from './inheritance/MovieReader';
import { MatchResult } from './MatchResult';
// import { CsvFileReader } from './inheritance/CsvFileReader';

// Inheritance index
const readerFoot = new MatchReader('football.csv');
readerFoot.read()

const readerMovie = new MovieReader('movies.csv');
readerMovie.read();

// Composition index
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

let manUnitedWins = 0;
let manUnitedDraw = 0;

let dramaMoviesCount = 0;
let comedyMoviesCount = 0;

// inheritance for loop
for (let movie of readerMovie.data) {
  if (movie[1] === 'Drama') {
    dramaMoviesCount++;
  } else if (movie[1] === 'Comedy') {
    comedyMoviesCount++;
  }
}

//composition for loop
for (let match of readerFoot.data) {
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

  There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list
  `);