/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profitOnPurchase1 = 0, profitOnPurchase2 = 0;
    let costPriceOnPurchase1 = Infinity, costPriceOnPurchase2 = Infinity;

    for(let price of prices){
        costPriceOnPurchase1 = Math.min(costPriceOnPurchase1, price);
        profitOnPurchase1    = Math.max(profitOnPurchase1, price - costPriceOnPurchase1);
        costPriceOnPurchase2 = Math.min(costPriceOnPurchase2, price - profitOnPurchase1);
        profitOnPurchase2    = Math.max(profitOnPurchase2, price - costPriceOnPurchase2);
    }
    
    return profitOnPurchase2;  
};