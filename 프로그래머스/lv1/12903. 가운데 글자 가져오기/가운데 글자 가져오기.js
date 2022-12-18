function solution(s) {
    const length = Math.floor(s.length / 2);
    return s.length % 2 !== 0? s[length] : s.slice(length-1, length+1);
}