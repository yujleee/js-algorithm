function solution(my_string) {
    const answer = my_string.split('').map((char) => {
        if(char === char.toUpperCase()){
            return char.toLowerCase();
        } else{
            return char.toUpperCase();
        }
    }).join('');
    
    return answer;
}