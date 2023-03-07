/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    time=time.sort((a,b)=>a-b)
    let length=time.length
    let left=1
    let right=time[length-1]*totalTrips

    while(left<right){
        let mid=Math.floor((left+right)/2)
        let midTime=findTime(time, mid)
        console.log(left, right, mid, midTime)
        if (totalTrips> midTime) left=mid+1
        else right=mid
    }
    return left
};

function findTime(time, timeGiven){
    let totalTrip=0
    for(let i=0;i<time.length;i++){
        if(time[i]<=timeGiven){
            let trip=Math.floor(timeGiven/time[i])
            totalTrip+=trip
        }
    }
    return totalTrip
}