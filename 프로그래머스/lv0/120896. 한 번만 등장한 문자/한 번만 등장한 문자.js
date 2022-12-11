function solution(s) {
    var answer = [];
    s.split('').forEach((char) => {
        s.indexOf(char) === s.lastIndexOf(char) ? answer.push(char) : null;
    })
    return answer.sort().join('');
}