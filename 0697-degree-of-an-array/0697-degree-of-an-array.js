/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map={}
    if(nums.length===1) return 1
    for(let i=0;i<nums.length;i++){
        if(nums[i] in map) map[nums[i]]++
        else{
            map[nums[i]]=1
        }
    }
    let arr = Object.values(map);
    let max = Math.max(...arr);
    let min=Infinity
    if(max===1) return 1
    for(let i=0;i<nums.length;i++){
        let first=nums[i]
        let count=1
        let last=Infinity
        for(let j=i+1; j<nums.length;j++){
            if(nums[j]===first) count++
            if(count===max){
                last=j
                break
            }
        }
        min=Math.min(last-i+1, min)
    }
    return min
};