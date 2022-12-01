function solution(my_string) {
    const answer = my_string.split('').map((char) => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
    
    return answer;
}