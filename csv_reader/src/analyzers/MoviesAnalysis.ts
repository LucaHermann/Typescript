import { IAnalyzer } from '../interfaces'
import { MovieData } from '../MovieData';

export class MoviesAnalysis implements IAnalyzer {

  constructor() { }

  run(movies: MovieData[]): string {
    let dramaMoviesCount = 0;
    let comedyMoviesCount = 0;

    for (let movie of movies) {
      if (movie[1] === 'Drama') {
        dramaMoviesCount++;
      } else if (movie[1] === 'Comedy') {
        comedyMoviesCount++;
      }
    }

    return `There is ${dramaMoviesCount} drama movies and ${comedyMoviesCount} comedy movies in this list`
  }
}