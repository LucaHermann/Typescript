import { MatchReader as MatchReaderComposition } from './composition/MatchReader';
import { MovieReader as MovieReaderComposition } from './composition/MovieReader';
import { Reporting } from './Reporting';

const matchReader = MatchReaderComposition.fromCsv('football.csv');
const moviesReader = MovieReaderComposition.fromCsv('movies.csv');
const reportingFoot = Reporting.winsAnalysisAndReport('Man City');
const reportingMovies = Reporting.movieAnalysisAndReport();

matchReader.load()
moviesReader.load();
reportingFoot.buildAndPrintReport(matchReader.matches);
reportingMovies.buildAndPrintReport(moviesReader.movies);