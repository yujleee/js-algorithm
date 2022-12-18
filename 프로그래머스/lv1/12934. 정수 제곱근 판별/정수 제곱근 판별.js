function solution(n) {
    var x = Math.sqrt(n);
    return Number.isInteger(x) > 0 ? (x+1)**2 : -1;
}