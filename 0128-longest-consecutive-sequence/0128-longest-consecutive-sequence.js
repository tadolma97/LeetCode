/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b)=>a-b)
    
    let max=0
    let count=1
    for(let i=0; i<nums.length; i++){
        if(nums[i+1]===nums[i]+1){
            count++
        }else if(nums[i+1]===nums[i]){
            continue
        }
        else{
            if(count>max)max=count
            count=1
        }
    }
    return max
};