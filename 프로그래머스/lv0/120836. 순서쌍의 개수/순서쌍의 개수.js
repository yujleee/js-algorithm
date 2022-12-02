function solution(n) {
    
    let divisors = [];
    
    // 약수 찾기 절반값까지만 체크
    for(let i=1; i<= n/2; i++){
        if(n % i === 0) divisors.push(i);
    }
    divisors.push(n);
    
    return divisors.length;
}