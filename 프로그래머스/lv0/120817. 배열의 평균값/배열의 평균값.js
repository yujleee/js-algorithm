function solution(numbers) {
    let answer = numbers.reduce((acc, cur, idx) => {return acc + cur}, 0);
    return answer / numbers.length;
}