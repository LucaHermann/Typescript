"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./composition/MatchReader");
const MovieReader_1 = require("./composition/MovieReader");
const Reporting_1 = require("./Reporting");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const moviesReader = MovieReader_1.MovieReader.fromCsv('movies.csv');
const reportingFoot = Reporting_1.Reporting.winsAnalysisAndReport('Man City');
const reportingMovies = Reporting_1.Reporting.movieAnalysisAndReport();
matchReader.load();
moviesReader.load();
reportingFoot.buildAndPrintReport(matchReader.matches);
reportingMovies.buildAndPrintReport(moviesReader.movies);
