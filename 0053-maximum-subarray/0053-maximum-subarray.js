/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=nums[0]
    let total=0
    for(let i=0; i<nums.length; i++){
        total=total+nums[i]
        if(total>max){
            max=total
        }   
        if(total<0){
            total=0
        }
    }
    return max
};