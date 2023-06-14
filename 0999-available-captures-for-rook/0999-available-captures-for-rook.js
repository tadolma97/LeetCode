/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let place=[]
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j]==="R"){
                place=[i, j]
            }
        }
    }
    let count=0
    let x=place[0]
    let y=place[1]
    if(find(x,y, board, "up")) count++
    if(find(x,y, board, "down")) count++
    if(find(x,y, board, "left")) count++
    if(find(x,y, board, "right")) count++
    return count
    
};
function find(x, y, board, direction){
    if (x < 0 || x >= 8 || y < 0 || y >= 8 || board[x][y] === 'B') return false
    else if (board[x][y] === 'p') return true
    if (direction === 'up') return find( --x, y,board, 'up')
    else if (direction === 'right') return find(x, ++y, board,'right')
    else if (direction === 'down') return find( ++x, y,board, 'down')
    else if (direction === 'left') return find(x, --y,board, 'left')
}