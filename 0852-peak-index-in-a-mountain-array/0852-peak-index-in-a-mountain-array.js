/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    for(let i=0; i<arr.length;i++){
        let j=i+1
        if(arr[j]<arr[i]) return i 
    }
};