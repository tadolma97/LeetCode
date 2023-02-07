/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let object={}
    magazine=magazine.split('')
    ransonNote=ransomNote.split('')
    for(let letter of magazine){
        if(!(letter in object)){
            object[letter]=1
        }else{
            object[letter]+=1
        }
    }
    for(let letter of ransomNote){
        if(!(letter in object)) return false
        else{
            object[letter]-=1
            if(object[letter]<0) return false
        }
    }
    return true
};