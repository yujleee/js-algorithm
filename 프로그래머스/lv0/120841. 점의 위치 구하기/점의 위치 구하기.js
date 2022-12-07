function solution(dot) {

    const x = dot[0] > 0 ? 1 : 0;
    const y = dot[1] > 0 ? 1 : 0;
    
    
    if(x === 1){
        return (y === 1 ? 1 : 4);
    } else{
        return (y === 1 ? 2 : 3);
    }
    
    
    return answer;
}