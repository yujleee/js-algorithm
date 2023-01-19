function solution(s) {
    const nums = s.split(' ').map((num) => parseInt(num));
    return [Math.min(...nums) ,Math.max(...nums)].join(' ');
}