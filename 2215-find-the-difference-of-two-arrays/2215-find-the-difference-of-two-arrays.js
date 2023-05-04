/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let object=[]
    let firstArr=new Set()
    let secondArr=new Set()
    for(let i=0; i<nums2.length;i++){
        if (!nums1.includes(nums2[i]) ) firstArr.add(nums2[i])
    }
    for(let i=0; i<nums1.length;i++){
        if (!nums2.includes(nums1[i]) ) secondArr.add(nums1[i])
    }
    
    object.push([...secondArr])
    object.push([...firstArr])
    return object
};