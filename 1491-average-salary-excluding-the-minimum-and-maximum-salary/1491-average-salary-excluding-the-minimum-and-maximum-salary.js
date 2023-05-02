/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min=Math.min(...salary)
    let max=Math.max(...salary)
    let add=salary.reduce((a,b)=>a+b)-min-max
    let numbers=salary.length-2
    return add/numbers
};