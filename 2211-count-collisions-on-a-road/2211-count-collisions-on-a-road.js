/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let stack=[]
    let count=0
    directions=directions.split('')
    for(let i=0; i<directions.length; i++){
        let prev=stack[stack.length - 1]
        let curr=directions[i]
        if(!stack.length&&curr!=="L"){
            stack.push(curr)
        }else if(prev==="R" && curr==="L"){
            count+=2
            stack.pop()
            directions[i]="S"
            i--
        }else if(prev==="S" && curr==="L"){
            count+=1
        }else if(prev==="S" && curr==="R"){
            stack.push(curr)
        }else if(prev==="R" && curr==="R"){
            stack.push("R")
        
        }else if(prev==="R" && curr==="S"){
            count+=1
            stack.pop()
            directions[i]="S"
            i--
        }
    }
    return count
};