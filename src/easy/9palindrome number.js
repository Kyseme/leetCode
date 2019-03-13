/**
 * Determine whether an integer is a palindrome.
 * 判定一个整数是否是回文整数
 *  An integer is a palindrome when it reads the same backward as forward.
 * 回文整数从前向后和从后向前读是一样的

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */


var isPalindrome = function(x) {
    if(Math.sign(x)<0) return false;
    if(x<10) return true;
    let temp = x;
    let num = 0;
    let last =1;
    while(temp>=10){
        last = temp % 10;//1
        temp = Math.floor(temp/10);//12
        num = num + last;
        num = num *10;
    }
    num = num + temp;
    if(num === x){
        return true;
    }
    return false;
};
// var test = -121;
// test = 10;
// test = 0;
// var res = isPalindrome(test);
// console.log(res);


//others
var isPalindrome = function(x) {
    if (x<0 || (x!=0 && x%10==0)) return false;
    let rev = 0;
    while (x>rev){
    	rev = rev*10 + x%10;
    	x = Math.floor(x/10);
    }
    return (x==rev || x==Math.floor(rev/10));
};
var test = -121;
test = 10;
test = 0;
test = 121;
var res = isPalindrome(test);
console.log(res);