/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0
    let right=nums.length-1
    let answer=[]
    if(nums.length===1 && nums[0]===target) return [0,0]
    if(nums.length===2 && (nums[1]===target && nums[0]===target)) return [0,1]
    if(nums.length===2 && (nums[0]===target)) return [0,0]
    if(nums.length===2 && (nums[1]===target)) return [1,1]
    let set=new Set(nums)
    if (!set.has(target)) return [-1,-1]
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        console.log(left, right)
        if(target===nums[mid]){
            let middle=mid
            let middle2=mid
            while(nums[middle]===target){
                middle--
            }
            answer.push(middle+1)
            while(nums[middle2]===target){
                middle2++
            }
            answer.push(middle2-1)
            return answer

        }else if(target>nums[mid]){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    if(answer.length===1){
        answer.push(answer[0])
        return answer
    }else return [-1,-1]
};