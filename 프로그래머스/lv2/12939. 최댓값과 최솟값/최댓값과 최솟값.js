function solution(s) {
    const numbers = s.split(' ').map((num) => parseInt(num));
    return [Math.min(...numbers) ,Math.max(...numbers)].join(' ');
}