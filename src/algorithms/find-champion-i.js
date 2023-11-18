/**
 * There are n teams numbered from 0 to n - 1 in a tournament. Given a
 * 0-indexed 2D boolean matrix grid of size n * n. For all i, j that 0 <= i,
 * j <= n - 1 and i != j team i is stronger than team j if grid[i][j] == 1,
 * otherwise, team j is stronger than team i.
 *
 * Team a will be the champion of the tournament if there is no team b that is
 * stronger than team a.
 *
 * Returns the team that will be the champion of the tournament.
 *
 * @format
 * @param {number[][]} grid - A 2D array of numbers representing teams
 * @returns {number} - Returns the index of the team that will be champion
 */

function findChampion(grid) {
  const len = grid.length;
  for (let i = 0; i < len; i++) {
    let curr = 0;
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === 1) {
        curr++;
      }
      if (curr === len - 1) {
        return i;
      }
    }
  }
}
