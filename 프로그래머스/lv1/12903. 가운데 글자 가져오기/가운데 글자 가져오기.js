function solution(s) {
    const length = s.length;
    if(length % 2 === 0){
        return s.slice((length/2) - 1, (length/2) + 1);
    } else{
        return s[Math.floor(length / 2)];    
    }
    
}