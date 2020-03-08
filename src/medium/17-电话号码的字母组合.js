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
    let result = new Set();
    // a -> letter
    // b -> letter or array
    const traversal = (a, b) => {
        if (b instanceof Array) {
            if (b.length > 1) {
                b = [...traversal(b[0], b.slice(1))];
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
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
console.log(letterCombinations('23'));
console.log(letterCombinations('234'));
