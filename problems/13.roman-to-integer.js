/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let total = 0;
    let prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const value = romanValues[s[i]];

        total += value < prev ? -value : value;

        prev = value;
    }

    return total;
};
// @lc code=end
