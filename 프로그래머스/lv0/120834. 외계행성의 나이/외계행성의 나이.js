function solution(age) {
    
    const alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    
    // 숫자 -> 문자 -> 쪼개기 -> 맞는 알파벳 찾기 -> 합치기
    
    const str = String(age).split('');
    console.log(str);
    const answer = str.map((char) => alphabet[Number(char)]).join('');
    
    return answer;
}