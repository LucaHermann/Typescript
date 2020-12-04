import { IDataReader } from '../interfaces';
import { MovieData } from '../MovieData'
import { CsvFileReader } from './CsvFileReader';
export class MovieReader {
  static fromCsv(fileName: string): MovieReader {
    return new MovieReader(new CsvFileReader(fileName));
  }
  movies: MovieData[] = [];

  constructor(public reader: IDataReader) { }

  load(): void {
    this.reader.read();
    this.movies = this.reader.data.map(
      (row: string[]): MovieData => {
        return [
          row[0],
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          parseInt(row[5]),
          row[6],
          parseInt(row[7])
        ];
      }
    );
  }
}