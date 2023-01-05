/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0
    let r=nums.length-1
    while(l<r){
        let m=Math.floor((r+l)/2)
        if(target===nums[m]) return m
        else if(target<nums[m]){
            r=m
        }else l=m+1
    }
    if(l===r){
        if(target<=nums[l]) return l
        return l+1
    }
};