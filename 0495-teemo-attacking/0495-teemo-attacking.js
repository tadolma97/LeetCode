/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time=duration
    for(let i=1; i<timeSeries.length;i++){
        time+=Math.min((timeSeries[i]-timeSeries[i-1]), duration)
    }
    return time
};