function solution(s) {
    var answer = [0,0];
    while(s !== '1'){
        s = s.split('');
        let len = s.filter(char => char === '1').length;
        answer[0]++;
        answer[1] += s.length - len; // 제거된 0의 개수 누적
        s = len.toString(2);
    }
    return answer;
}