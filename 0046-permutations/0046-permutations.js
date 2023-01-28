/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result=[]
    const dfs=(i, nums)=>{

    if(i===nums.length){
        result.push(nums.slice())
        return
    }
    for(let j=i; j<nums.length; j++){
        swap(nums, i, j)
        dfs(i + 1, nums)
        swap(nums, i, j)
    }
}
    dfs(0,nums)
    return result

};

function swap(nums, one, two) {
    let temp = nums[one];
    nums[one] = nums[two];
    nums[two] = temp;
}
