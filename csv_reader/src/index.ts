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

const csvMovieReader = new CsvFileReader('movies.csv');
const movieReader = new MovieReaderComposition(csvMovieReader);
movieReader.load();

let manUnitedWinsCount = 0;
let manUnitedDrawCount = 0;
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
    manUnitedWinsCount++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWinsCount++;
  } else if (match[1] === 'Man United' && match[5] === MatchResult.Draw) {
    manUnitedDrawCount++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Draw) {
    manUnitedDrawCount++;
  }
}

console.log(`
  Man United won ${manUnitedWinsCount} games this season.
  Man United draw ${manUnitedDrawCount} games this season.

  There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list
  `);