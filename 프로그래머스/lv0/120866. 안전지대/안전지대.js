function solution(board) {
    let answer = board.length ** 2;
    
    let dx = [-1,0,-1,-1,1,1,0,1,-1];
    let dy = [-1,-1,-1,1,0,1,1,-1,0];
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j] === 1){
                answer--;
                
               
                // 8방향 확인
                for(let k=0; k<dx.length; k++){
                    let nx = i+dx[k];
                    let ny = j+dy[k];
                    
                    if(nx >= 0 && ny >= 0 && nx < board.length && ny < board.length){
                        // 해당 방향이 지뢰가 없을 때
                        if(board[nx][ny] === 0){
                            answer--;
                            board[nx][ny] = 'X';
                        }
                    }
                }
            }         
        }
    }
    
    
    return answer;
}