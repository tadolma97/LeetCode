/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(let i=1; i<=(s.length/2); i++){
        let split=chunk(s, i)
        let count=0
        for(let j=0; j<split.length;j++){
            let first=split[0]
            if(split[j]===first) count++
            if(count===split.length) return true
        }
    }
    return false
};

function chunk(str, size) {
    return str.match(new RegExp('.{1,' + size + '}', 'g'));
}