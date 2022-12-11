function solution(n) {
    // 약수의 개수가 3개인지 확인하기
    let answer = [];
    
    function isCompositeNumber(num){
        let count = 0;
        for(let i=1; i<=num; i++){
            if(num % i === 0) count++;
        }
        return count >= 3 ? true : false;
    }
    
    for(let i=1; i<= n; i++){
        isCompositeNumber(i) ? answer.push(i) : null;
    }
        
    return answer.length;
    
}