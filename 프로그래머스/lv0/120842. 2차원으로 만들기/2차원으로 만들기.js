function solution(num_list, n) {
    var answer = [];
    
    const length = Math.ceil(num_list.length/n);
    for(let i=0; i<length; i++){
        answer.push(num_list.splice(0, n));    
    }
    
    return answer;
}