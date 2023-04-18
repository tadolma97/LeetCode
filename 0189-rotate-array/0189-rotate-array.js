/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     let i=0
//     while(i<k){
//        let reminder=nums.pop()
//        nums.unshift(reminder)
//         i++
//     }
//     return nums
// };

var rotate = function(nums, k) {
    if(k>nums.length){
        k=k%nums.length
    }
    let start=nums.length-k

    let newArray=[]
    let splice1=nums.splice(start,nums.length-1)
    let splice2=nums.splice(0, start)
    nums.unshift(...splice1,...splice2)

};

