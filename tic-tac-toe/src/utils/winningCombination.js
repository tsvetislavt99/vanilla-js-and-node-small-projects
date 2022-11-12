export const winningCombinations = [
  // Row Wins
  [[true, true, true], [], []],
  [[], [true, true, true], []],
  [[], [], [true, true, true]],
  // Diagonal Wins
  [[true], [, true], [, , true]],
  [[, , true], [, true], [true]],
  // Column Wins
  [[true], [true], [true]],
  [
    [, true],
    [, true],
    [, true],
  ],
  [
    [, , true],
    [, , true],
    [, , true],
  ],
];
