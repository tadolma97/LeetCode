/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let half=s.length/2
    s.split()
    let first=s.slice(0, half)
    let second=s.slice(half,s.length)
    let firstVowel=countVowel(first)
    let secondVowel=countVowel(second)
    if(firstVowel===secondVowel) return true
    else return false
    
};
function countVowel(s){
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    let count=0
    s=[...s]
    for(let letter in s){
        if(vowels.includes(s[letter])) count++
    }
    return count
}