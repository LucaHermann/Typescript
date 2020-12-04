"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./inheritance/MatchReader");
const MovieReader_1 = require("./inheritance/MovieReader");
const MatchReader_2 = require("./composition/MatchReader");
const MovieReader_2 = require("./composition/MovieReader");
const MatchResult_1 = require("./MatchResult");
const CsvFileReader_1 = require("./composition/CsvFileReader");
// Inheritance index
const readerFoot = new MatchReader_1.MatchReader('football.csv');
readerFoot.read();
const readerMovie = new MovieReader_1.MovieReader('movies.csv');
readerMovie.read();
// Composition index
const csvMatchReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_2.MatchReader(csvMatchReader);
matchReader.load();
const csvMovieReader = new CsvFileReader_1.CsvFileReader('movie.csv');
const movieReader = new MovieReader_2.MovieReader(csvMovieReader);
movieReader.load();
let manUnitedWins = 0;
let manUnitedDraw = 0;
let dramaMoviesCount = 0;
let comedyMoviesCount = 0;
// inheritance for loop
for (let movie of movieReader.movies) {
    if (movie[1] === 'Drama') {
        dramaMoviesCount++;
    }
    else if (movie[1] === 'Comedy') {
        comedyMoviesCount++;
    }
}
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

  There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list
  `);
