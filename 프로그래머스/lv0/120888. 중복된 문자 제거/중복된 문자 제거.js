function solution(my_string) {
    // 문자 -> split('') -> 이미 stack에 있는지 확인 -> 없으면 push, 있으면 넘어가기
    
    let stack = [];
    
    my_string.split('').forEach((char) => {
        if(!stack.includes(char)) stack.push(char);
    });
    
    return stack.join('');
}