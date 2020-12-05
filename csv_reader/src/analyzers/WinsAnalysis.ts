import { IAnalyzer } from './../interfaces';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements IAnalyzer {

  constructor(public teamName: string) { }

  run(matches: MatchData[]): string {
    let winsCount = 0;
    let drawCount = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        winsCount++;
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        winsCount++;
      } else if (match[1] === this.teamName && match[5] === MatchResult.Draw) {
        drawCount++;
      } else if (match[2] === this.teamName && match[5] === MatchResult.Draw) {
        drawCount++;
      }
    }

    return `Team ${this.teamName} won ${winsCount} matches this seasons for ${drawCount} matches draw`
  }
}