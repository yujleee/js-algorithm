function solution(array) {
    var answer = array.join('').split('').filter((char) => char === '7').length;
    return answer;
}