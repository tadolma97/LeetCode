/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry=0
    let aNum=a.split('').map(Number).reverse()
    let bNum=b.split('').map(Number).reverse()
    let aIndex=0
    let bIndex=0
    let sum=[]
    while (aIndex<=aNum.length-1||bIndex<=bNum.length-1||carry){
        let add= (aNum[aIndex]? aNum[aIndex] : 0) + (bNum[bIndex] ? bNum[bIndex]: 0) + carry;
        if(add>2){
            carry=1
            add=1
        }
        else if(add>1){
            carry=1
            add=0
        }
        else{
            carry=0
        }
        sum.push(add)
        if(aIndex<=aNum.length-1){
            aIndex++
        }
        if(bIndex<=bNum.length-1){
            bIndex++
        }
    }
    let correct=sum.reverse()
    return correct.join('')
    
};
