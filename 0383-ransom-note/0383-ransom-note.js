/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let object={}
    for(let letter of magazine){
        if(!object[letter]){
            object[letter]=0
        }
        object[letter]++

    }
    for(let letter of ransomNote){
        if(!object[letter]) return false
        object[letter]--
    }
    return true
};