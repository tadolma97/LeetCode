/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let array=[]
    for(let i=0; i<capacity.length;i++){
        array.push(capacity[i]-rocks[i])
    }
    array.sort((a,b)=>a-b)
    let j=0
    while(additionalRocks>0){
        additionalRocks-=array[j]
        j++
    }
    if(additionalRocks===0) return j
    return j-1
//     let i=0;
//     while(i<capacity.length){
//         if(rocks[i]<capacity[i]&& additionalRocks>0){
//             additionalRocks=additionalRocks-(capacity[i]-rocks[i])
//             console.log(rocks[i], "1")
//             rocks[i]=capacity[i]
//             console.log(rocks[i])

//         }
//         i++
//         console.log(additionalRocks,
//                    "hi")
//     }
//     let full=0
//     console.log(capacity, rocks)
//     for(let j=0; j<capacity.length;j++){
//         if(capacity[j]===rocks[j]) full++
//     }
//     return full
};