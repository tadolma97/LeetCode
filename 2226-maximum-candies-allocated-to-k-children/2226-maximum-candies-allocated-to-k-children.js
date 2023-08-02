/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let total=candies.reduce((a,b)=>a+b,0)
    if(total<k) return 0
    let left=1
    let right=Math.max(...candies)
    while(left<right){
        let mid=Math.ceil((left+right)/2)
        let number=0
        for(candy of candies){
            number+=candy/mid
            number=Math.floor(number)
        }
        if(number>=k) left=mid
        else right=mid-1
    }
    return left
};