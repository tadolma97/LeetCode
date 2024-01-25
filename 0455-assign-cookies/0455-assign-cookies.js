/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count=0
    let left=0
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    for(let i=0; i<s.length;i++){
       if(s[i]>=g[left]){
           count++ 
           left++
       }
    }
    return count
};