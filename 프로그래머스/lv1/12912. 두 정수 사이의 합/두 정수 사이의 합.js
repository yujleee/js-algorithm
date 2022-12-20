function solution(a, b) {
    var answer = 0;
    
    let big = 0;
    let small = 0;
    
    if(a > b){
        big = a;
        small = b;
    } else{
        big = b;
        small = a;
    }
    
    
    for(let i=small; i<=big; i++){
        answer += i;
    }
    
    return answer;
}