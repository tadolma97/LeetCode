/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack=[]
    for(let i=0; i<asteroids.length; i++){
        if(stack.length==0){
            stack.push(asteroids[i]) 
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
            stack.push(asteroids[i])
        }
        else if(sign===false && otherSign===true){
            stack.push(prev)
            stack.push(asteroids[i])
        }
        else{
            if(Math.abs(prev)===Math.abs(asteroids[i])){
               continue
            }
            else if(Math.abs(prev)>Math.abs(asteroids[i])){
                stack.push(prev)
            }else{
                i--
            }
        }
    }
    return stack
};