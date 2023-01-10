/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=Infinity
    let profit=0
    let maxProfit=0
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min) min=prices[i]
        else if(prices[i+1]<prices[i]){
            let difference=prices[i]-min
            profit+=difference
            min=prices[i+1]
            i=i+1
        }else if(i===prices.length-1){
            difference=prices[prices.length-1]-min
            profit+=difference
            break
        }
    }
    return profit
};