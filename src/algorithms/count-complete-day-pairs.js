/**
 * Given an integer array hours representing times in hours, return an integer
 * denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms
 * a complete day. A complete day is defined as a time duration that is an
 * exact multiple of 24 hours. For example, 1 day is 24 hours, 2 days is 48
 * hours, 3 days is 72 hours, and so on.
 *
 * @format
 * @param {number[]} hours - An array of number representing hours.
 * @returns {number} - Returns a count of pairs that form a complete day.
 */

function countCompleteDayPairs(hours) {
  let pairs = 0;
  for (let i = 0; i < hours.length - 1; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) {
        pairs++;
      }
    }
  }
  return pairs;
}
