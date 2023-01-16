function solution(n, m) {
    var answer = [];
    
    // 최대공약수: 공통인 약수중 가장 큰값
    const getGDC = (a, b) => {
        let gdc = 1;
        
        for(let i=2; i<=Math.min(a,b); i++){
            if(a % i === 0 & b % i === 0) gdc = i;
        }
        
        return gdc;
    }
    
    const gdc = getGDC(n,m);
    
    // 최소공배수: 공통인 배수중 가장 작은 값
   const lcm = (n * m) / gdc;
    
    return [gdc, lcm];
}