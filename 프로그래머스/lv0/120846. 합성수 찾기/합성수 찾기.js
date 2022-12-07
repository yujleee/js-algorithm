function solution(n) {
    let answer = 0;
    
    // 약수의 개수 세기
    function isMixNumber(num) {
        let count = 1;
        
        for(let i = 1; i <= (num/2); i++){
            num % i === 0 ? count++ : null;
        }
        
        return count >= 3 ? true : false;
    
    }
    
    for(let i=1; i<=n; i++){
       isMixNumber(i) ? answer++ : 0;
    }
    
    return answer;
}