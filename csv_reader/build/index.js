"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs")); // Node std lib File System.
const matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf8',
    flag: 'r+'
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
let manUnitedWins = 0;
let manUnitedDraw = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
    else if (match[1] === 'Man United' && match[5] === MatchResult.Draw) {
        manUnitedDraw++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.Draw) {
        manUnitedDraw++;
    }
}
console.log(`
  Man United won ${manUnitedWins} games this season.
  Man United draw ${manUnitedDraw} games this season.
  `);
