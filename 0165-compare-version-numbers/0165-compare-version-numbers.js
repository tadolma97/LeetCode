/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var removeZeroes = function (v) {
        console.log(v,"first")
    let digits = v.split(".");
    console.log(digits)
    for(let i = 0; i < digits.length; i++) {
        digits[i] = (Number(digits[i]));
    }
    console.log(digits, "last")
    return digits;
}

var compareVersion = function(version1, version2) {
    let v1 = removeZeroes(version1);
    let v2 = removeZeroes(version2);

    let len = Math.max(v1.length,v2.length);
    for(let i = 0; i < len; i++) {
        let p1 = Number(v1[i]);
        let p2 = Number(v2[i]);
        if( !isNaN(p1) && !isNaN(p2) ) {
            if(p1 < p2) 
                return -1;
            else if (p1 > p2) 
                return 1;
        }
        else {
            if( !isNaN(p1) && p1 > 0)
                return 1;
            else if ( !isNaN(p2) && p2 > 0)
                return -1;
        }
    }
    return 0;
};
// var compareVersion = function(version1, version2) {
//     const v1 = version1.split('.').map(num => Number(num))
//     const v2 = version2.split('.').map(num => Number(num))
//         console.log(v1,v2)
//     const diff = Math.abs(v1.length - v2.length);
//     if(v1 > v2) {
//         v2.push(...new Array(diff).fill(0));
//     } else {
//         v1.push(...new Array(diff).fill(0));
//     }
//     console.log(v1,v2)
//     for(let i = 0; i < v1.length; i++) {
//         if(v1[i] > v2[i]) return 1;
//         else if(v1[i] < v2[i]) return -1;
//     }
    
//     return 0;
// };