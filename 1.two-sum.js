/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var indexes = {};

    for (let i = 0; i < nums.length; i++) {
        n = nums[i];
        complement = target - n;

        if (indexes.hasOwnProperty(complement)) {
            return [indexes[complement], i];
        }

        indexes[n] = i;
    }
};
// @lc code=end
