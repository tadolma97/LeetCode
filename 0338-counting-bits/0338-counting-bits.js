/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let answer=[]
    let start=0
    while(start<n+1){
        let r=start.toString(2)
        let count=0
        for(let i=0;i<r.length;i++){
            if(r[i]==='1') count++
        }
        answer.push(count)
        start++
    }
    return answer
};