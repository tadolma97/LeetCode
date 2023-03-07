/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingInt=[]
    let count=1
    for(let i=0; i<arr.length;i++){
        if(count!==arr[i]){
            missingInt.push(count)
            i--
        }
        count++
    }
    console.log(missingInt)
    let length=arr.length-1
    if(missingInt[k-1]) return missingInt[k-1]
    else return arr[length]+k-missingInt.length
};