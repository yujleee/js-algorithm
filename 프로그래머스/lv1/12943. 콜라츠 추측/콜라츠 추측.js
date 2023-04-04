function solution(num) {
    let count = 0;
    
    function collatz(n){
        if(n === 1) return 0;
        if(count >= 500) return -1;
        count++;
        
        return n % 2 === 0 ? collatz(n/2) : collatz(n*3 + 1);
    }
    
   collatz(num);
    
    return count === 500 ? -1 : count;
}