/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort(function(a, b){return a-b})
    console.log(costs)
    let answer=0
    let price=0
    for(let i=0; i<costs.length;i++){
        console.log(costs[i], price)
        if(costs[i]<coins && costs[i]<=coins-price){
            price+=costs[i]
            answer++
        }
        else{
            return answer
        }
    }
    return answer
};