function solution(s) {    
    if(s.length === 4 || s.length === 6){
      return s.split('').find((el) => !Number.isInteger(Number(el))) ? false : true;
    }
    return false;
}