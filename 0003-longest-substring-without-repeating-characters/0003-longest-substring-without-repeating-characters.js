/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hold=new Set()
    let left=0
    let max=0
    for(let i=0; i<s.length;i++){
        while(hold.has(s[i])){
            hold.delete(s[left])
            left++
        }
        hold.add(s[i])
        console.log(left)
        max=Math.max(max, i-left+1)
    }
    return max
}