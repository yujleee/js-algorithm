function solution(balls, share) {
    if(balls === share) return 1;
    
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

 // 팩토리얼 재귀함수
function factorial(n){
    const bigN = BigInt(n);
    
    if(bigN === BigInt(1)){
        return BigInt(1);
    }
        
    return bigN * factorial(bigN - BigInt(1));
}
