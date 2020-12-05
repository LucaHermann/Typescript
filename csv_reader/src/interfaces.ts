import { MatchData } from "./MatchData";
import { MovieData } from "./MovieData";

export interface IDataReader {
  read(): void,
  data: string[][]
}

export interface IAnalyzer {
  run(list: MatchData[] | MovieData[]): string;
}

export interface IReportTarget {
  print(report: string): void;
}