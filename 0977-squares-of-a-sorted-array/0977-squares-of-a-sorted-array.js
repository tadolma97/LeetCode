/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let head=0
    let tail=A.length-1
    let result=[]
    
while (head <= tail) {
    if (A[head] ** 2 > A[tail] ** 2) {
        result.unshift(A[head++] ** 2) 
        console.log(head)}
    else result.unshift(A[tail--] ** 2);
  }

  return result;
    
};