/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority=nums.length/2
    let obk={}
    for(let i=0; i<nums.length;i++){
        if(nums[i] in obk){
            obk[nums[i]]+=1
            if(obk[nums[i]]>majority) return nums[i]
        }
        else{
            obk[nums[i]]=1
            if(obk[nums[i]]>majority) return nums[i]
        }
    }
    
};