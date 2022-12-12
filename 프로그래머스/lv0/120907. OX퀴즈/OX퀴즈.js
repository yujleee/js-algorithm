// function solution(quiz) {
//     var answer = [];
    
//    for(let i=0; i<quiz.length; i++) {
//         const q = quiz[i].split(' ');
//         +q[0] + (q[1] === '-' ? -1 : 1) * +q[2] === +q[4] ? answer.push('O') : answer.push('X');
//    };
    
//     return answer;
// }

function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}