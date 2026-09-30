/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const findNextPrefix = function (j, prefix) {
        let common = null;

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];

            if (j == word.length || (common != null && word[j] != common)) {
                return prefix;
            }

            if (common == null) {
                common = word[j];
            }
        }

        return findNextPrefix(j + 1, prefix + common);
    };

    return findNextPrefix(0, "");
};
// @lc code=end
