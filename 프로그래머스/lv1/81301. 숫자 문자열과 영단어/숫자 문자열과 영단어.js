function solution(s) {
    
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    nums.forEach((n, idx) => {
        s = s.replaceAll(n, idx);
    })
    
    return Number(s);
}