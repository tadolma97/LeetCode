/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let hash={}
    
    if(strs.length===1) return [strs]
    for(let word of strs){
        let wordArray=word.split("")
        let sort=wordArray.sort()
        let newWord=sort.join('')
        if(!(hash[newWord])) hash[newWord]=[]
        hash[newWord].push(word)
    }
    let answer=[]
    for(let key in hash){
        answer.push(hash[key])
    }
    return answer

};
