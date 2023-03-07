/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let newArr = [];
    let i = 0;
    let j = 0;
    let end = k
    while(newArr.length <= end){
        if(i === arr[j]){
        j++
        i++;
        }
        else{
            newArr.push(i)
            i++; 
        }
    }
     return newArr[newArr.length-1];
};