function solution(keyinput, board) {
    var answer = [0,0];
    
    const keys = {
        up: [0, 1],
        down: [0, -1],
        left: [-1, 0],
        right: [1,0],
    };
    
    keyinput.forEach((key) => {
        if(Math.abs(answer[0] + keys[key][0]) <= Math.floor(board[0]/2) && 
           Math.abs(answer[1] + keys[key][1]) <= Math.floor(board[1]/2)){
            answer[0] += keys[key][0];
            answer[1] += keys[key][1];
        }
        
    });
    
    return answer;
        
}
