/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let answer=[]
    let prev=[1]
    for(let i=1; i<=numRows;i++){
        let array=new Array(i)
        array.fill(1)
        for(let j=1; j<array.length-1; j++){
            array[j]=prev[j-1]+prev[j]
        }
        prev=array
        answer.push(array)
    }
    return answer
};

