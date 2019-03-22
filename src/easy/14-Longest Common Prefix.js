/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function(strs) {

    if(strs.length <= 0) return '';
    if(strs.length == 1) return strs[0];
    let len = strs[0].length;
    let com = '';
    try{
        for(var j = 0;j<len;j++){
            for(var i=0;i<strs.length-1;i++){
                if(strs[i].length >0 && strs[i+1].length>0){
                    if(strs[i][j]!==strs[i+1][j]){
                       return com; 
                    }
                }else{
                    return com;
                }
            }
            com +=strs[i][j];
        }
        return com;
     
    }catch(e){
        return com;
    }
};



var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length <=0) return '';
    let pre = strs[0];
    let i =1;
    while(i<strs.length){
        while(strs[i].indexOf(pre) ===-1){
            pre = pre.substring(0,pre.length-1);
        }
        i++;
    }
    return pre;
}

var tt= ["dog","racecar","car"];
tt = ["flower","flow","flight"];
tt = [];
tt = ['',''];
tt = ["ab c","ab c","ab c"];
console.log(longestCommonPrefix(tt));