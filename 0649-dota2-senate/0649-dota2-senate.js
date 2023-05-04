/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let queue1=[]
    let dCount=0
    let rCount=0
    let first=helper(senate, queue1, dCount, rCount)
    console.log(first,9)
    if (first[0]==="D") return "Dire"
    else return "Radiant"

};
var helper=function(senate, queue, dCount, rCount){
    for(let i=0; i<senate.length; i++){
        if(i===senate.length-1) {
            queue.push(senate[i]) 
            break}
        else if(senate[i]==="D"){
            if(rCount===0){
                dCount++
                queue.push(senate[i])
            }else{
                rCount--
            }
        }
        else{
            if(dCount===0){
                rCount++
                queue.push(senate[i])
            }else{
                dCount--
            }
        }
    }
    console.log(queue, "before", dCount, rCount)
    queue.unshift(queue.pop())
    console.log(queue, "finals")
    if(new Set(queue).size===1) return queue
    else return helper(queue, [], dCount,rCount)
    
}