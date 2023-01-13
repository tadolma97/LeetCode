/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    let visited=new Set()
    let count=0
   for(let r=0;r<grid.length;r++){
       for(let c=0;c<grid[0].length;c++){
           if(explore(grid, r,c, visited)===true){
               count+=1
           }
       }
   }
   return count
}

var explore=function(grid,r,c, visited){
    const rowBounds=0 <= r && r < grid.length
    const colBounds=0 <= c && c < grid[0].length
    if(!rowBounds || !colBounds) return false
    const pos=r+','+c
    if(visited.has(pos)) return false
    visited.add(pos)
    if (grid[r][c]==='0') return false
    
    explore(grid, r+1, c, visited)
    explore(grid, r-1, c, visited)
    explore(grid, r, c+1, visited)
    explore(grid, r, c-1, visited)
    return true
}








//     const visited=new Set()
//     let count=0
//     //need to explore the whole grid. Need to iterate through row and col
//     for(let r=0;r<grid.length; r+=1){
//         for(let c=0;c< grid[0].length;c+=1){
//             if (explore(grid,r,c,visited)===true) {
//                 count+=1
//             }
//         }
//     }
//     return count
// };

// var explore=function(grid, r,c, visited){
//     //make sure the row and col doesn't go out of bounds
//     const rowBounds=0 <= r && r < grid.length
//     const colBounds=0 <= c && c < grid[0].length
//     if(!rowBounds || !colBounds) return false
//     const pos=r+','+c
//     if(grid[r][c]==='0')return false
//     if(visited.has(pos)) return false
//     visited.add(pos)
//     //depth first search 
//     explore(grid,r+1,c,visited)
//     explore(grid,r-1,c,visited)
//     explore(grid,r,c+1,visited)
//     explore(grid,r,c-1,visited)
//     return true