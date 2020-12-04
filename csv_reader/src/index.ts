// import { MatchReader as MatchReaderInheritance } from './inheritance/MatchReader';
// import { MovieReader as MovieReaderInheritance } from './inheritance/MovieReader';
import { MatchReader as MatchReaderComposition } from './composition/MatchReader';
import { MovieReader as MovieReaderComposition } from './composition/MovieReader';

import { MatchResult } from './MatchResult';
import { CsvFileReader } from './composition/CsvFileReader';

// Inheritance index
// const readerFoot = new MatchReaderInheritance('football.csv');
// readerFoot.read();
// const readerMovie = new MovieReaderInheritance('movies.csv');
// readerMovie.read();

// Composition index
const csvMatchReader = new CsvFileReader('football.csv');
const csvMovieReader = new CsvFileReader('movies.csv');
const movieReader = new MovieReaderComposition(csvMovieReader);
const matchReader = new MatchReaderComposition(csvMatchReader);

let winsCount = 0;
let drawCount = 0;
let dramaMoviesCount = 0;
let comedyMoviesCount = 0;

matchReader.load();
movieReader.load();

for (let movie of movieReader.movies) {
  if (movie[1] === 'Drama') {
    dramaMoviesCount++;
  } else if (movie[1] === 'Comedy') {
    comedyMoviesCount++;
  }
}

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    winsCount++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    winsCount++;
  } else if (match[1] === 'Man United' && match[5] === MatchResult.Draw) {
    drawCount++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Draw) {
    drawCount++;
  }
}

console.log(`
  Man United won ${winsCount} games this season.
  Man United draw ${drawCount} games this season.

  There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list
  `);