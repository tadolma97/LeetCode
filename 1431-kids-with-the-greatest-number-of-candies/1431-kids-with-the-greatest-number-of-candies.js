/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let answer=[]
    let maxNumber=Math.max(...candies)
    for(let i=0; i<candies.length; i++){
        let temp=candies[i]+extraCandies
        if(temp>=maxNumber) answer.push(true)
        else answer.push(false)
    }
    return answer
};