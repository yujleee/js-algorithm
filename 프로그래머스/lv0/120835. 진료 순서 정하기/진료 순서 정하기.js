function solution(emergency) {
    // 높은 순서대로 정렬
    // 값이 같으면 인덱스 push
    const sort = [...emergency].sort((a,b) => b - a);
    return emergency.map((item) => sort.indexOf(item) + 1);
}