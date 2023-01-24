/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let answer=[]
    let partialSolution=[]
    recur(0, partialSolution, nums, answer)
    return answer
    
};
var recur= function(i, path, nums, answer){
    if(i===nums.length){
        return answer.push([...path])
    }
    recur(i+1, path, nums, answer)
    path.push(nums[i])
    recur(i+1, path, nums, answer)
    path.pop()
    
}