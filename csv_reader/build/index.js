"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./inheritance/MatchReader");
const MovieReader_1 = require("./inheritance/MovieReader");
const MatchResult_1 = require("./MatchResult");
// import { CsvFileReader } from './inheritance/CsvFileReader';
// Inheritance index
const readerFoot = new MatchReader_1.MatchReader('football.csv');
readerFoot.read();
const readerMovie = new MovieReader_1.MovieReader('movies.csv');
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
    }
    else if (movie[1] === 'Comedy') {
        comedyMoviesCount++;
    }
}
//composition for loop
for (let match of readerFoot.data) {
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
