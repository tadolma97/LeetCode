/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
//     let old={"{":0,
//             "[":0,
//             "(":0}
//     for(let i=0; i<s.length;i++){

//         if(s[i]==="("){
//             old["("]=old["("]+1
//         }else if(s[i]==="{"){
//             old["{"]=old["{"]+1
//         }else if(s[i]==="["){
//             old["["]=old["["]+1
//         }else if(s[i]===")"){
//             if(old["("]>0){
//                 old["("]=old["("]-1
//             }else return false
//         }else if(s[i]==="}"){
//             if(old["{"]>0){
//                 old["{"]=old["{"]-1
//             }else return false
//         }else if(s[i]==="]"){
//             if(old["["]>0){
//                 old["["]=old["["]-1
//             }else return false
//         }
//     }
//     return true
    let old=[]
    for(let i=0; i<s.length;i++){  
        if(s[i]==="{"||s[i]==="["||s[i]==="("){
            old.push(s[i])
        }else if(s[i]==="}"){
            if(old[old.length-1]==="{"){
                old.pop()
            }else return false
        }else if(s[i]===")"){
            if(old[old.length-1]==="("){
                old.pop()
            }else return false
        }else if(s[i]==="]"){
            if(old[old.length-1]==="["){
                old.pop()
            }else return false
        }
    }
    if(old.length===0) return true
    else return false
};