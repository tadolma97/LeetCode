/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let added=arrivalTime+delayedTime
    if(added>23){
        added-=24
    }
    return added
};