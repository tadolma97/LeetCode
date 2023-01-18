/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    helperFunction(s, 0, s.length-1)

};

var helperFunction=function(arr, l, r){
    if(l>=r) return
    [arr[l], arr[r]]=[arr[r], arr[l]]
    helperFunction(arr,l+1, r-1)
}


    // console.log(s)
    // let last=s.length-1
    // if(s.length===1) return s[0]
    // return s.at(-1)+reverseString(s.slice(0,-1))

//     var l_idx = 0
//     var r_idx = s.length - 1

//     while (l_idx < r_idx){
//         let temp=s[l_idx]
//         s[l_idx]= s[r_idx]
//         s[r_idx] = temp
//         l_idx=l_idx +1
//         r_idx =r_idx- 1
//     }