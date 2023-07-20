/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids=asteroids.sort((a,b)=>a-b) 
    for(let i=0; i<asteroids.length; i++){
        let curr=asteroids[i]
        if(mass>=curr) mass+=curr
        else return false
    }
    return true
};