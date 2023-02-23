/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);//heaviest item
    let right = weights.reduce((a,b) => a + b); //total weight
    while (left < right){
        let mid = Math.floor((left + right) / 2);//to find a median capacity
        console.log(mid)
        let daysNeeded = 1;
        let currentWeight = 0;
        for( i = 0; i < weights.length; i++){
            if(currentWeight + weights[i] > mid){
                daysNeeded ++;
                currentWeight = weights[i];
            }
            else currentWeight += weights[i];
        }
        if(daysNeeded > days) left = mid + 1;
        else right = mid;
    }
    return left;
};

