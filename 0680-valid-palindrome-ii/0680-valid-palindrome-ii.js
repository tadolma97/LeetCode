/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left=0
    let right=s.length-1
    let count=0
    return helper(s, left, right, count)
};
var helper=function(s, left, right, count){
    if(count>1) return false
    if(left>=right) return true
    if(s[left]===s[right]){
            left++
            right--
            return helper(s, left, right, count)
    }else {
        count++
        return (helper(s, left+1, right, count) || helper(s, left, right-1, count))
    }

}
