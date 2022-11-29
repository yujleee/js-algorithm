function solution(my_string, n) {
    var answer = '';
    
    const str = my_string.split('');
    
    // 문자열을 하나씩 배열로 쪼갠다
    // n의 숫자만큼 출력해서 answer에 합치기
    
    str.forEach((char) => {
        let idx = 0;
        while(idx < n){
            answer += char;
            ++idx;
        }
    }) 
    
    return answer;
}