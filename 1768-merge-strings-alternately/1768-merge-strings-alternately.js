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
    let length1=word1.length
    let length2=word2.length
    while(length1>one || length2>two){
        if(one<length1){
            result=result.concat(word1[one])
            one++
        }
        if(two<length2){
            result=result.concat(word2[two])
            two++
        }
    }
    return result
};