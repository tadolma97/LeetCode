/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack=[]
    for(let i=0; i<asteroids.length; i++){
        let current=asteroids[i]
        if(stack.length==0){
            stack.push(current) 
            continue
        }  
        let prev=stack.pop()
        let sign, otherSign
        if(prev>0) sign=true
        else sign=false
        if(asteroids[i]>0) otherSign=true
        else otherSign=false
        if(sign==otherSign){
            stack.push(prev)
            stack.push(current)
        }
        else if(sign===false && otherSign===true){
            stack.push(prev)
            stack.push(current)
        }
        else{
            if(Math.abs(prev)===Math.abs(current)){
               continue
            }
            else if(Math.abs(prev)>Math.abs(current)){
                stack.push(prev)
            }else{
                i--
            }
        }
    }
    return stack
};