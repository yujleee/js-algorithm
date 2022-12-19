function solution(s) {    
    if(s.length === 4 || s.length === 6){
        return s.split('').find((ch) => !Number.isInteger(Number(ch))) ? false : true;    
    }
    return false;
}