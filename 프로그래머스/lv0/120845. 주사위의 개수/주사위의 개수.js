function solution(box, n) {
    let answer = 1;
    box.forEach((item) => answer *= Math.floor(item / n));
    return answer;
}