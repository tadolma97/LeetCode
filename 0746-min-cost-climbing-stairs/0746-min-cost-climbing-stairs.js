/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
   cost=cost.reverse()
   for(let i=2;i<cost.length;i++){
       let min=Math.min(cost[i-1], cost[i-2])
       cost[i]=min+cost[i]
   }
    let first=cost.pop()
    let second=cost.pop()
    return Math.min(first, second)
};