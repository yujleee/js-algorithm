function solution(num) {
    var answer = 0;
    
    function collatz(n){
        if(answer >= 500) return -1;
        if(n === 1) return 1;

        let calc = n % 2 === 0 ? n / 2 : (n * 3) + 1;
        answer++;
        return collatz(calc);
    }
    
    const result = collatz(num);
    
    return result === -1 ? result : answer;
}