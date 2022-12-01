function solution(my_string) {
    
    const vowels = ['a','e','i','o','u'];
    
    const answer = my_string.split('').filter((char) => !vowels.find((item) => item === char)).join('');
    
    return answer;
}