"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let winsCount = 0;
        let drawCount = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
                winsCount++;
            }
            else if (match[2] === this.teamName && match[5] === MatchResult_1.MatchResult.AwayWin) {
                winsCount++;
            }
            else if (match[1] === this.teamName && match[5] === MatchResult_1.MatchResult.Draw) {
                drawCount++;
            }
            else if (match[2] === this.teamName && match[5] === MatchResult_1.MatchResult.Draw) {
                drawCount++;
            }
        }
        return `Team ${this.teamName} won ${winsCount} matches this seasons for ${drawCount} matches draw`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
