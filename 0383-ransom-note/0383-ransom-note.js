/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let object={}
    for(let letter of magazine){
        object[letter]?object[letter]++:object[letter]=1

    }
    for(let letter of ransomNote){
        if(!object[letter]) return false
        object[letter]--
    }
    return true
};