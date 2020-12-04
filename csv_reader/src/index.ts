import { MatchReader as MatchReaderInheritance } from './inheritance/MatchReader';
import { MovieReader as MovieReaderInheritance } from './inheritance/MovieReader';

import { MatchReader as MatchReaderComposition } from './composition/MatchReader';
import { MovieReader as MovieReaderComposition } from './composition/MovieReader';

import { MatchResult } from './MatchResult';
import { CsvFileReader } from './composition/CsvFileReader';

// Inheritance index
const readerFoot = new MatchReaderInheritance('football.csv');
readerFoot.read();

const readerMovie = new MovieReaderInheritance('movies.csv');
readerMovie.read();

// Composition index
const csvMatchReader = new CsvFileReader('football.csv');
const matchReader = new MatchReaderComposition(csvMatchReader);
matchReader.load();

const csvMovieReader = new CsvFileReader('movie.csv');
const movieReader = new MovieReaderComposition(csvMovieReader);
movieReader.load();

let manUnitedWins = 0;
let manUnitedDraw = 0;

let dramaMoviesCount = 0;
let comedyMoviesCount = 0;

// inheritance for loop
for (let movie of movieReader.movies) {
  if (movie[1] === 'Drama') {
    dramaMoviesCount++;
  } else if (movie[1] === 'Comedy') {
    comedyMoviesCount++;
  }
}

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

  There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list
  `);