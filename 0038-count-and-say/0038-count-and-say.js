/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n===1) return "1"
    let start='11'
    while(n>2){
        let hold=toArray(start)
        start=toString(hold)
        n--
    }
    return start
};
var toArray=function(n){
    n=n.split('')
    console.log(n)
    let hold=[]
    let count=1
    let current=n[0]
    for(let i=1; i<n.length;i++){
        if(current===n[i]){
            count++
        }
        else{
            let array1=[count, current]

            hold.push(array1)
            current=n[i]
            count=1
        }  
        if(i+1===n.length){
            let array1=[count, current]
            hold.push(array1)
            break
        }
        
    }
    
    return hold
}
var toString=function(n){
    n=n.flat().join("")
    return n
}