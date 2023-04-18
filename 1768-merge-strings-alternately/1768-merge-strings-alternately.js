/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word1A=word1.split('')
    let word2A=word2.split('')
    let result=[]
    let max=Math.max(word1.length, word2.length)
    for(let i=0; i<max; i++){
        result.push(word1[i])
        result.push(word2[i])
    }

    return result.join("")
};