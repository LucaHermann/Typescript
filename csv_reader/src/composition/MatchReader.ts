import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';
import { IDataReader } from '../interfaces';
import { CsvFileReader } from './CsvFileReader';

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  matches: MatchData[] = [];

  constructor(public reader: IDataReader) { }

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // 'H', 'A', 'D' Type Insertion
          row[6]
        ];
      }
    );
  }
}