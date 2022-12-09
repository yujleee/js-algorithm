function solution(d, budget) {
    var answer = d.sort((a,b) => a - b).reduce((acc, curr) => acc + ((budget -= curr) >= 0), 0);
    
    return answer;
}