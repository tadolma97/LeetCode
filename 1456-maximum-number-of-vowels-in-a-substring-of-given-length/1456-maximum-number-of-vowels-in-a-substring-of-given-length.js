/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let min=0
    let count=0
    for(let i=0;i<k; i++){
      if(s[i]==="a"||s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]==="u") count++
      if(count>min) min=count
    }
    for(let i=k; i<s.length;i++){
        let present=0
        let past=0
        if(s[i-k]==="a"||s[i-k]==="e"||s[i-k]==="i"||s[i-k]==="o"||s[i-k]==="u") past=1
        if(s[i]==="a"||s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]==="u") present=1
        count+=present-past
        if(count>min) min=count
    }
    return min
};
