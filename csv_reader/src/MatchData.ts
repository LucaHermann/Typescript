import { MatchResult } from './MatchResult';

// Custom Tuples for matching the row of a game with the propers types.
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];