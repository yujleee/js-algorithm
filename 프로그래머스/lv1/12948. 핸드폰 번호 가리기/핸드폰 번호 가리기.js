function solution(phone_number) {
    var answer = '';
    const length = phone_number.length;
    answer = answer.padStart(length-4, '*') + phone_number.slice(length-4);
    return answer;
}