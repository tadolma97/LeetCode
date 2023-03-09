/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let object={}
    for(let i=0; i<list1.length;i++){
        if(list2.includes(list1[i])) object[list1[i]]=i
    }
    for(let i=0; i<list2.length;i++){
        if(list2[i] in object) object[list2[i]]+=i
    }
        
    let arr=Object.values(object)
    let min=Math.min(...arr)
    return Object.keys(object).filter(key => object[key] === min)
    
};