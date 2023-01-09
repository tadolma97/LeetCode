/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max=0
    let left=0
    let right=height.length-1
    while(left<right){
        let length=right-left
        let width=Math.min(height[left], height[right])
        let vol=length*width
        if(vol>max) max=vol
        if(height[left]>height[right]) right--
        else left++
    }
    return max
};