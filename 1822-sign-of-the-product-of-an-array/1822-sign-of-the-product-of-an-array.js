/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let nums1=nums.reduce((a,b)=>a*b)
    console.log(nums1)
    return signFunc(nums1)

};

var signFunc=function(nums1){
    if(nums1<0) return -1
    else if(nums1>1) return 1
    else return 0
}