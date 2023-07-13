/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let max=nums.length
    nums=nums.sort((a,b)=>a-b)
    nums=new Set(nums)
    nums=[...nums]
    let answer=[]
    let number=1
    for(let i=0; number<=max; i++){
        if(nums[i]!==number){
            answer.push(number)
            i--
        }
        number++
    }
    return answer
};