function solution(s){
    // 괄호가 ( 일때만 스택에 넣기
   let stack = [];
    
    if(s.length <= 1) return false;
    if(s[0] === ')') return false;
    
    for(let i=0; i<s.length; i++){
        s[i] === '(' ? stack.push('(') : stack.pop();
    }
    
    return stack.length >= 1 ? false: true;
    
}