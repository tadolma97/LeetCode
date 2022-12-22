/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count=0
    let substring=''
    for(let i=0; i<s.length;i++){
       if(substring.includes(s[i])){
           const index=substring.indexOf(s[i])+1
           substring=substring.slice(index)+s[i]
       }
        else{
            substring+=s[i]

        }
        count=Math.max(count, substring.length)
    }
    return count
};