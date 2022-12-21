/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let newString=s.trim().split(" ")
   
   let last=newString.length-1
   
   return newString[last].length
};