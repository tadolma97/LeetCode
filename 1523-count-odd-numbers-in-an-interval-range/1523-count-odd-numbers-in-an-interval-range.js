/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let range=(high-low+1)
    if(range%2===0) return range/2
    else{
        if(low%2===1&& high%2===1){
            return range/2+.5
        }else{
            return range/2-.5
        }
    }
};