import { IAnalyzer, IReportTarget } from './interfaces';
import { MatchData } from './MatchData';
import { MovieData } from './MovieData';
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { MoviesAnalysis } from './analyzers/MoviesAnalysis'
import { HTMLReport } from './reportsTargets/HTMLReport';
import { ConsoleReport } from './reportsTargets/ConsoleReport';

export class Reporting {
  static winsAnalysisAndReport(teamName: string) {
    return new Reporting(
      new WinsAnalysis(teamName),
      new ConsoleReport()
    );
  }

  static movieAnalysisAndReport() {
    return new Reporting(
      new MoviesAnalysis(),
      new HTMLReport()
    );
  }

  constructor(public analyzer: IAnalyzer, public reportTarget: IReportTarget) { }

  buildAndPrintReport(items: MatchData[] | MovieData[]): void {
    const report = this.analyzer.run(items);
    this.reportTarget.print(report);
  }
}