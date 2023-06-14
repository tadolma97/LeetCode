/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let store=[]
    for(let i=0; i<nums.length; i++){
        let hold=nums[i]
        let check=nums[i]
        for(let j=i+1; j<=nums.length; j++){
            if(nums[j]!==check+1){
                console.log(i, j)
            store.push([hold, nums[j-1]])
            i=j-1
            break
            }else{
                check=nums[j]
            }
        }

    }
            let answer=[]
    for(let i=0; i<store.length; i++){
        if(store[i][0]===store[i][1]){
            answer.push(`${store[i][0]}`)
        }else{
            answer.push(`${store[i][0]}->${store[i][1]}`)
        }
    }
    return answer
};