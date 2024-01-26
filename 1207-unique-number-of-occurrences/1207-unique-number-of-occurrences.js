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
    let arr2=new Set()
    for(let val of Object.values(frequencyTable)){
        if(arr2.has(val)) return false
        else arr2.add(val)
    }
    return true
};