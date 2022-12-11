function solution(balls, share) {
    
    function factorial(n){
        let bigNum = BigInt(n);
        return bigNum === BigInt(1) ? BigInt(1) : bigNum * factorial(bigNum - BigInt(1));
    }
    
    return balls === share ? 1 : factorial(balls) / (factorial(balls - share) * factorial(share));
}