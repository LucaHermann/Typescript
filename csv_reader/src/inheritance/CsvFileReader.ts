import fs from 'fs'; // Node std lib File System.

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) { }

  abstract mapRow(row: string[]): T;

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
      .map(this.mapRow);
    console.log(this.data);
  };
};