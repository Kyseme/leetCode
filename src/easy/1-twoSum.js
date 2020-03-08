/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        res[0] = i;
        const sub = target - nums[i];
        const index = nums.indexOf(sub, i+1);
        if (index !== -1 && index !== i) {
            res[1] = index;
            return res;
        }
        res = [];
    }
};


let  nums = [2, 7, 11, 15];
let target = 9;
nums = [0,4,3,0];
target = 0;

nums = [-1,-2,-3,-4,-5];
target = -8;
const res = twoSum(nums, target);

console.log(res);
