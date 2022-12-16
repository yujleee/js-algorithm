function solution(arr) {
    let answer = [];
    
    if(arr.length <= 1) return [-1];
    
    return arr.filter((el) => el !== Math.min(...arr));
}