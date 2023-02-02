/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result=[]
    let number=0
   for(let i=0; i<nums.length;i++){
       number+=nums[i]
       result.push(number)
   }
    return result
};