function solution(n) {
    var answer = '';
    
    let count = 0;
    while(count < n){
        answer += count % 2 === 0 ? '수' : '박';
        count++;
    }
    
    return answer;
}