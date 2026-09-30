/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
            case "{":
            case "[":
                stack.push(s[i]);
                break;
            case ")":
            case "}":
            case "]":
                if (pairs[stack.pop()] !== s[i]) {
                    return false;
                }
            default:
        }
    }
    return stack.length === 0;
};
// @lc code=end
