import { CsvFileReader } from './CsvFileReader';

type MovieData = [string, string, string, number, number, number, string, number];

export class MovieReader extends CsvFileReader<MovieData> {
  mapRow(row: string[]): MovieData {
    return [
      row[0],
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      parseInt(row[5]),
      row[6],
      parseInt(row[7]),
    ];
  }
}

