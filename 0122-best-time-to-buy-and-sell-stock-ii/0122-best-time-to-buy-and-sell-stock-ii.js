/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=Infinity
    let profit=[]
    let maxProfit=0
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min) min=prices[i]
        else if(prices[i+1]<prices[i]){
            let difference=prices[i]-min
            profit.push(difference)
            min=prices[i+1]
            i=i+1
        }else if(i===prices.length-1){
            console.log('hi')
            difference=prices[prices.length-1]-min
            profit.push(difference)
            break
        }

    }
    if(profit.length===0){
        maxProfit=prices[prices.length-1]-min
    }
    for(let i=0;i<profit.length;i++){
        
        maxProfit+=profit[i]
    }
    
    return maxProfit
};