/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    if(returnStack(s)===returnStack(t)) return true
    return false
}
var returnStack=function(s){
    let stack=[]
    for(let i=0; i<s.length;i++){
        console.log(s[i])
        if(s[i]==='#') stack.pop()
        else stack.push(s[i])
    }
        console.log(stack)
    return stack.join('')

}

// var backspaceCompare = function(s, t) {
//     s=s.split('')
//     t=t.split('')
//     if(deleteString(s)===deleteString(t)) return true
//     console.log(s,t)
//     return false
// };

// var deleteString=function(s){
//     for(let i=0; i<s.length;i++){
//         if(s[i]==='#' && i===0){
//            s.splice(0,1)
//             i=-1
//         }  
//         else if(s[i]==='#') {
//             s.splice(i-1,2) 
//             i=-1
//         }
//     }
//     return s.join('')
// }