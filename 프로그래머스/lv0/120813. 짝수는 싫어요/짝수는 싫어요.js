function solution(n) {
    let answer = [];
    // n 이하의 홀수를 배열에 담기
    // 배열을 오름차순으로 정렬하기
    
    for(let i=0; i<=n; i++){
        if(i%2 !== 0) answer.push(i);
    }
    
    return answer.sort((a,b) => a-b);
}