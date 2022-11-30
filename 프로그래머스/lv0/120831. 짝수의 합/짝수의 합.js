function solution(n) {
    // for문을 돌며 짝수 더하기
    var answer = 0;
    
    for(let i=0; i<=n; i++){
        if(i%2 === 0) answer += i;
    }
    
    return answer;
}