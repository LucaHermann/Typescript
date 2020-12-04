"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesAnalysis = void 0;
class MoviesAnalysis {
    constructor() { }
    run(movies) {
        let dramaMoviesCount = 0;
        let comedyMoviesCount = 0;
        for (let movie of movies) {
            if (movie[1] === 'Drama') {
                dramaMoviesCount++;
            }
            else if (movie[1] === 'Comedy') {
                comedyMoviesCount++;
            }
        }
        return `There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list`;
    }
}
exports.MoviesAnalysis = MoviesAnalysis;
