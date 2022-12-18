function solution(num) {
    let count = 0;
    
    function collaz(n){
        if(n === 1) return 0;
        if(count >= 500) return -1;
        count++;
        
        return n % 2 === 0 ? collaz(n/2) : collaz(n*3 + 1);
    }
    
   collaz(num);
    
    return count === 500 ? -1 : count;
}