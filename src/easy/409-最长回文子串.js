/**
 * @file 数一下字符数量就可以了
 * @author zoubo01<zoubo01@baidu.com>
 */

/**
 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

 注意:
 假设字符串的长度不会超过 1010。

 示例 1:

 输入:
 "abccccdd"

 输出:
 7

 解释:
 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    s.split('').forEach(ch => {
        if (map[ch]) {
            map[ch]++;
        }
        else {
            map[ch] = 1;
        }
    });
    let ans = 0;
    for (key in map) {
        ans += map[key] % 2 ? map[key] - 1 : map[key];
    }
    return ans === s.length ? ans : ans + 1;
};
