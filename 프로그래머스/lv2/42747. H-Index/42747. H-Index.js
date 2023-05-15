function solution(citations) {
    // 많이 인용된 순으로 정렬
    // 인용수가 논문수와 같거나 작아지기 시작하는 숫자가 h-index

    citations = citations.sort((a, b) => b - a);
    
    let answer = 0;
    while (answer + 1 <= citations[answer]) {
        answer++;
    }
    return answer;
}
