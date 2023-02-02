/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft=[]
    let sumRight=[]
    for(let i=0;i<nums.length;i++){
        let left=0
        let right=0
        for(let j=0;j<nums.length;j++){
            if(j>=0 &&j<i){
                left+=nums[j]
            }
            if (j<nums.length && j>i){
                right+=nums[j]
            }
            }
            sumLeft.push(left)
            sumRight.push(right) 
    }
    for(let k=0;k<nums.length;k++){
        if(sumLeft[k]===sumRight[k]) return k
    
    }
    return -1

};