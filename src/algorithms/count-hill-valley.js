/**
 * Given an integer array nums, an index i is part of a hill in nums if the
 * closest non-equal neighbors of i are smaller than nums[i]. Similarly, an
 * index i is part of a valley in nums if the closest non-equal neighbors of
 * i are larger than nums[i]. Adjacent indices i and j are part of the same
 * hill or valley if nums[i] === nums[j]. Note that for an index to be part
 * of a hill or valley, it must have a non-equal neighbor on both the left
 * and right of the index.
 * 
 * Returns the number of hills and valleys in nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number} - Returns a count of hills and valleys in an array
 */
function countHillValley (nums) {
  let count = 0;
  for (let i = 1, j = 0; i < nums.length - 1; i++) {
    if (nums[j] > nums[i] && nums[i] < nums[i + 1]) {
      count++;
      j = i;
    } else if (nums[j] < nums[i] && nums[i] > nums[i + 1]) {
      count++;
      j = i;
    }
  }
  return count;
}