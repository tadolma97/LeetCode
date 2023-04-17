/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let end=nums.length-1
    if(nums.length===1) return true
    if(nums[0]===0) return false
    let jump=new Array(nums.length).fill(0)
    jump[0]=1
    for(let i=0; i<end; i++){
        let jumpMax=nums[i]
        if(jump[i]>0){
            jump.fill(1, i+1, i+jumpMax+1)
        }
       if(jump[end]>0) return true
    }

    return false
};


