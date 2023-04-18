/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// var mergeAlternately = function(word1, word2) {
//     let word1A=word1.split('')
//     let word2A=word2.split('')
//     let result=[]
//     let max=Math.max(word1.length, word2.length)
//     for(let i=0; i<max; i++){
//         result.push(word1[i])
//         result.push(word2[i])
//     }
//     console.log(result)

//     return result.join("")
// };

var mergeAlternately = function(word1, word2) {
    let one=0
    let two=0
    let result=""
    while(word1.length>one || word2.length>two){
        if(one<word1.length){
            result=result.concat(word1[one])
            one++
        }
        if(two<word2.length){
            result=result.concat(word2[two])
            two++
        }
    }
    return result
};