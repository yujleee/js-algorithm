function solution(slice, n) {
    // 인원수%조각 => 나머지가 있다? +1판 

    return n % slice >= 1 ? Math.floor(n/slice) + 1 : n/slice;
}