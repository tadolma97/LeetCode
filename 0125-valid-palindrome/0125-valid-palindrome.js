/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCase=s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '')
    console.log(lowerCase)
    let n=lowerCase.length-1
    for(let i=0; i<n;i++){
        if(lowerCase[i]!==lowerCase[n]) return false
        n--
    }
    return true
};