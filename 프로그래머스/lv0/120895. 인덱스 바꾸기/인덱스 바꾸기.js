function solution(my_string, num1, num2) {
    // my_string을 split으로 쪼개기
    // 구조분해할당으로 인덱스의 위치 바꾸고 join으로 결합
    const str = my_string.split('');
    [str[num1], str[num2]] = [str[num2], str[num1]];
    
    
    return str.join('');
}