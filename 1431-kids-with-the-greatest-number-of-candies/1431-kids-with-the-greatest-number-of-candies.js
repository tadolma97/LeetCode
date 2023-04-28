/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let answer=[]
    for(let i=0; i<candies.length; i++){
        let maxNumber=Math.max(...candies)
        let temp=candies[i]+extraCandies
        if(temp>=maxNumber) answer.push(true)
        else answer.push(false)
    }
    return answer
};