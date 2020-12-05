import { IReportTarget } from '../interfaces'

export class ConsoleReport implements IReportTarget {
  print(report: string): void {
    console.log(report);
  }
}