function solution(s){
    // 괄호를 스택에 넣으면서 올바른지 확인
    let stack = [];
    
    if(s.length === 1 || s[0] === ')') return false;
 
    for(let i=0; i<s.length; i++){
        s[i] === '(' ? stack.push(s[i]) : stack.pop();
    }
    
    return stack.length === 0 ? true : false;
}