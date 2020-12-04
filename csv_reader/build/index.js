"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { MatchReader as MatchReaderInheritance } from './inheritance/MatchReader';
// import { MovieReader as MovieReaderInheritance } from './inheritance/MovieReader';
const MatchReader_1 = require("./composition/MatchReader");
const MovieReader_1 = require("./composition/MovieReader");
const MatchResult_1 = require("./MatchResult");
const CsvFileReader_1 = require("./composition/CsvFileReader");
// Inheritance index
// const readerFoot = new MatchReaderInheritance('football.csv');
// readerFoot.read();
// const readerMovie = new MovieReaderInheritance('movies.csv');
// readerMovie.read();
// Composition index
const csvMatchReader = new CsvFileReader_1.CsvFileReader('football.csv');
const csvMovieReader = new CsvFileReader_1.CsvFileReader('movies.csv');
const movieReader = new MovieReader_1.MovieReader(csvMovieReader);
const matchReader = new MatchReader_1.MatchReader(csvMatchReader);
let winsCount = 0;
let drawCount = 0;
let dramaMoviesCount = 0;
let comedyMoviesCount = 0;
matchReader.load();
movieReader.load();
for (let movie of movieReader.movies) {
    if (movie[1] === 'Drama') {
        dramaMoviesCount++;
    }
    else if (movie[1] === 'Comedy') {
        comedyMoviesCount++;
    }
}
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        winsCount++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        winsCount++;
    }
    else if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.Draw) {
        drawCount++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.Draw) {
        drawCount++;
    }
}
console.log(`
  Man United won ${winsCount} games this season.
  Man United draw ${drawCount} games this season.

  There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list
  `);
