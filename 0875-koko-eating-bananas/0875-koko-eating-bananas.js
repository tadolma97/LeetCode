/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=1
    let right=Math.max(...piles)
    while(left<right){
        let mid=Math.floor((left+right)/2)
        let number=0
        for(let banana of piles){
            number+=Math.ceil(banana/mid)
        }
        if(number>h) left=mid+1
        else right=mid
    }
    return right
};