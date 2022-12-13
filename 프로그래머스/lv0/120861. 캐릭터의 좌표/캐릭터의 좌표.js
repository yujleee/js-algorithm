function solution(keyinput, board) {
    let result = [0,0];
    
    const keys = {
        up: [0,1],
        down: [0, -1],
        left: [-1, 0],
        right: [1,0],
    };
    
    for(let i=0; i<keyinput.length; i++){
        const current = keys[keyinput[i]];
    
        if(Math.abs(result[0]+current[0]) <= Math.floor(board[0]/2) && 
           Math.abs(result[1]+current[1]) <= Math.floor(board[1]/2)){
            result[0] += current[0];
            result[1] += current[1];
        }        
               
    }
    
    return result;
}