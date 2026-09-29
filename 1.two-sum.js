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
    const indexes = new Map();

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const complement = target - n;

        if (indexes.has(complement)) {
            return [indexes.get(complement), i];
        }

        indexes.set(n, i);
    }
};
// @lc code=end
