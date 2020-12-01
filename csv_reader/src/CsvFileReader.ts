import fs from 'fs';  // Node std lib File System.

export class CsvFileReader {
  data: string[][] = [];

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
      );
  };
};