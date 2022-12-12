function solution(quiz) {
    var answer = [];
    
    for(let i=0; i<quiz.length; i++){
        const q = quiz[i].split(' ');
        Number(q[0]) + (q[1] === '-' ? -1 : 1) * Number(q[2]) === Number(q[4]) ? answer.push('O') : answer.push('X');
    }
    
    return answer;
}