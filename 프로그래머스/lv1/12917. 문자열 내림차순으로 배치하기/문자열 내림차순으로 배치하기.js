function solution(s) {
    // 1. 소문자만 정렬하기 알파벳 큰 것 -> 작은 것 순으로
    // 2. 대문자만 정렬하기 
    const lowercase = (s.replace(/[A-Z]/g, '').split('')).sort().reverse().join('');
    const uppercase = (s.replace(/[a-z]/g, '').split('')).sort().reverse().join('');
    
    return lowercase + uppercase;    
}