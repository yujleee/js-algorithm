function solution(n) {
    var answer = n.toString().split('').reverse();
    answer = answer.map(a => Number(a));
    
    return answer;
}