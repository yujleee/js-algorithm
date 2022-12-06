function solution(absolutes, signs) {
    // signs의 값이 true -> 1 / false -> -1 곱하기
    
    return absolutes.reduce((acc, curr, idx) => acc + (curr * (signs[idx] ? 1 : -1)), 0);
}