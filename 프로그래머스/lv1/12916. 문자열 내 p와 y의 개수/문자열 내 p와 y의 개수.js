function solution(s){
    const str = s.toLowerCase();
    const p = Array.from(str).filter(el => el === 'p');
    const y = Array.from(str).filter(el => el === 'y');

    return p.length === y.length;
    
    // 모두 다 소문자로 변경한다
    // 필터로 p와 y를 각각 거른다
    // 둘의 길이가 같으면 true
}