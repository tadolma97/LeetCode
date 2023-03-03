/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j=0
    let i=0
    let count=0
    while(i<=haystack.length){
        if(count===needle.length) return i-needle.length
        else if(haystack[i]===needle[j]){
            j++
            count++
        }else{
            j=0
            i-=count
            count=0
        }
        i++
    }
    return -1
};