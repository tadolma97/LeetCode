/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let frequencyTable={}
    for(let i=0;i<arr.length;i++){
        if(arr[i] in frequencyTable){
            frequencyTable[arr[i]]+=1
        }
        else frequencyTable[arr[i]]=1
    }
    let arr2=new Set(Object.values(frequencyTable)).size
    let obj=Object.keys(frequencyTable).length
    if(arr2===obj)return true
    else return false
};