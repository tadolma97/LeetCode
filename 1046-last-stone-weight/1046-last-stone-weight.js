/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    while(stones.length>1){
        stones=stones.sort((a,b)=>a-b)
        let i=stones[stones.length-1]
        let j=stones[stones.length-2]
        if(i===j){
            stones.pop()
            stones.pop()
        }else{
            stones.pop()
            stones.pop()
            stones.push(Math.abs(i-j))
        }
    }
    if(stones[0])return stones[0]
    return 0
};