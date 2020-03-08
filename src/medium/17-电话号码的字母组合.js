/**
 * @file 全排列
 * @author zoubo01
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) {
        return [];
    }
    const letter = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const numbers = digits.split('');
    // a -> letter
    // b -> letter or array
    const traversal = (a, b) => {
        if (b instanceof Array) {
            if (b.length > 1) {
                b = traversal(b[0], b.slice(1));
            }
            else {
                b = letter[+b[0]];
            }
        }
        let ret = new Set();
        a = letter[+a];
        for (let i = 0; i < a.length; i++) {
            const la = a[i];
            for (let j = 0; j < b.length; j++) {
                const lb = b[j];
                ret.add(la + lb);
            }
        }
        return Array.from(ret);
    };
    const a = numbers[0];
    if (numbers.length > 1) {
        const b = numbers.slice(1);
        return traversal(a, b);
    }
    return [...letter[+a]];
};


// 第二种 回溯

// const letterObj = ['abc', 'def','ghi', 'jkl','mno', 'pqrs', 'tuv', 'wxyz'];
// const letterObj = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz'
// };

// var letterCombinations = function(digits) {// 234
//     const resList = [];
//     if (digits) {
//         backtrace(0, digits, '', resList);// 0 234 '' []
//     }
//     return resList;

// };

// function backtrace(i, digits, str, resList) {
//     if(str.length === digits.length) { // 可替换为 i === digits.length
//         resList.push(str);
//         return;
//     }
//     let digit = digits.charAt(i);
//     let letters = letterObj[digit];  
//     for (let j = 0; j < letters.length; j++) {
//         backtrace(i + 1, digits, str + letters.charAt(j), resList);  // i+1 每次取下一次的数字
//     }
// }
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations('23'));
console.log(letterCombinations('234'));
