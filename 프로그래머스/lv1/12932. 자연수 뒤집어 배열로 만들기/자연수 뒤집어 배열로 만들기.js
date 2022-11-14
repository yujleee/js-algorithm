function solution(n) {
    var answer = n.toString().split('').reverse().map(a => Number(a));
    
    return answer;
}