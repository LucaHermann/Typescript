import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf8'
  })
  .split('\n')
  .map((matche: string): string[] => {
    return matche.split(',');
  });

console.log(matches);