/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */


var maxIceCream = function(costs, coins) {
    if(!costs.length  ) return 0
    costs.sort((a,b)=>a-b)
    let count = 0 ;
    for(let i = 0 ; i < costs.length ; i++ ){
        if(costs[i] <= coins){
            coins-=costs[i] 
            count++
        }else {
            break ;
        }
    }
    return count
};
// var maxIceCream = function(costs, coins) {
//     costs.sort(function(a, b){return a-b})
//     let answer=0
//     let price=0
//     for(let i=0; i<costs.length;i++){
//         if(costs[i]<coins && costs[i]<=coins-price){
//             price+=costs[i]
//             answer++
//         }
//         else{
//             return answer
//         }
//     }
//     return answer
// };