/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let count=0
    for(let i=0;i<k;i++){
        count+=nums[i]
    }

    let max=count
    for(let i=k;i<nums.length; i++){
        count=count-nums[i-k]+nums[i]
        if(count>max) max=count
    }
    return max/k
};