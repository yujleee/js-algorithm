function solution(box, n) {
    let answer = 1;
    
    box.forEach((len) => {
     answer = Math.floor(len / n) * answer;   
    });
    
    return answer;
}