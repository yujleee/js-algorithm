function solution(array) {
    const sort = [...array].sort((a,b) => a-b);
    const answer = sort[Math.ceil(sort.length/2)-1];
    return answer;
}