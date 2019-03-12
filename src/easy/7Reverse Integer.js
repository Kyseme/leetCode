/**
 * Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

//需要注意int存储的最大值和最小值界定
var reverse = function (x) {
    if (x == 0) return x;
    let num = x + '';
    let first = num.match(/^[^\d]/);
    if (first) {
        first = first[0];
        num = num.substring(1);
    } else {
        first = '';
    }
    num = num.split('').reverse().join('').replace(/^0/, '');
    num = Number(first + num);
 

    return (num <= 0x7fffffff && num >= -0x80000000) ? num : 0;
};


//0x7fffffff 为int的最大值  -0x80000000为int的最小值
// var reverse = function(x){
//     const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
//     return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
// }

var test = 123;
test = -123;
test = 120;
test = 0;
test = 1534236469;
console.log(reverse(test));