/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let newMap1=new Map()
    nums.forEach(x=>{
        newMap1.set(x, newMap1.has(x)? newMap1.get(x)+1:1)
    })
    let mapSort1=new Map([...newMap1.entries()].sort((a,b) => b[1] - a[1]))
    let answer=[...mapSort1.keys()]
    console.log(answer)
    return answer.splice(0,k)
};