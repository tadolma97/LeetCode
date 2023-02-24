/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let array=[]
    for(let i=0; i<boxTypes.length;i++){
        for(let j=0; j<boxTypes[i][0];j++)
            array.push(boxTypes[i][1])
    }
    array=array.sort((a,b)=>b-a)
    console.log(array)
    let total=0
    if(truckSize>array.length) return array.reduce((a,b)=>a+b)
    for(let i=0;i<truckSize;i++){
        total+=array[i]
    }
    return total
};