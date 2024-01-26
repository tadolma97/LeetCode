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
    let values=Object.values(frequencyTable)
    let arr2=[]
    for(let i=0;i<values.length;i++){
        if(arr2.includes(values[i])) return false
        else arr2.push(values[i])
    }
    return true
};