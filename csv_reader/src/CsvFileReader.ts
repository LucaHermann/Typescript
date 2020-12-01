import fs from 'fs'; // Node std lib File System.

import { dateStringToDate } from './utils';

import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) { }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf8',
        flag: 'r+'
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      )
      .map((row: string[]): MatchData => {
        /* 
         * row[0] = date, 
         * row[1] = home team, 
         * row[2] = away team,
         * row[3] = home team score, 
         * row[4] = away team score, 
         * row[5] = Match result,
         * row[6] = match referee 
         */
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // 'H', 'A', 'D' Type Insertion
          row[6]
        ];
      });
  };
};