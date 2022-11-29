function solution(my_string, letter) {
    var answer = Array.from(my_string).filter((char) => char !== letter).join('');
    
    return answer;
}