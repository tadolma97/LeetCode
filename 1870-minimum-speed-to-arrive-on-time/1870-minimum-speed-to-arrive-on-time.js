/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    if(dist.length>Math.ceil(hour)) return -1

    
    let left=1
    let right=10e7
    while(left<right){
        let mid=Math.floor((left+right)/2)
        let number=0
        for(let i=0;i<dist.length;i++){
            number=Math.ceil(number)
            number+=dist[i]/mid
        }
        if(number>hour) left=mid+1
        else right=mid
            
    }
    return right
    
};
