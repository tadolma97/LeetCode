/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    let index1 = a.length;
    let index2 = b.length;
    let result = '';
    let carry = 0;
    while (index1 || index2) {
        let sum = (index1 > 0 ? +a[--index1] : 0) + (index2 > 0 ? +b[--index2] : 0) + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    };
    return carry ? carry + result : result;
};
// var addBinary = function(a, b) {
//     let carry=0
//     let aNum=a.split('').map(Number).reverse()
//     let bNum=b.split('').map(Number).reverse()
//     let aIndex=0
//     let bIndex=0
//     let sum=[]
//     while (aIndex<=aNum.length-1||bIndex<=bNum.length-1||carry){
//         let add= (aNum[aIndex]? aNum[aIndex] : 0) + (bNum[bIndex] ? bNum[bIndex]: 0) + carry;
//         if(add>2){
//             carry=1
//             add=1
//         }
//         else if(add>1){
//             carry=1
//             add=0
//         }
//         else{
//             carry=0
//         }
//         sum.push(add)
//         if(aIndex<=aNum.length-1){
//             aIndex++
//         }
//         if(bIndex<=bNum.length-1){
//             bIndex++
//         }
//     }
//     let correct=sum.reverse()
//     return correct.join('')
    
// };
