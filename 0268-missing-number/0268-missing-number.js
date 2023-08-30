/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    let num=0
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==num) return num
        num++
    }
    return num
};