/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0
    let min=Infinity
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min) min=prices[i]
        let difference=prices[i]-min
        if(difference>profit) profit=difference
        console.log(min, profit)
    }
    return profit
};

//     let min=Infinity
//     let index=0
//     let max=0
//     for(let i=0;i<prices.length;i++){
//         if(prices[i]<min){
//             min=prices[i] 
//             index=i
//         }
        
//     }
//     for(let j=index;j<prices.length;j++){
//        if(prices[j]>max) max=prices[j]
//     }
//     let profit=max-min
//     return profit