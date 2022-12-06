function solution(num_list, n) {
    var answer = [];
    
    for(let i=0; i<num_list.length/n; i++){
        let arr = [...num_list].slice(i * n, i * n + n);
        answer.push(arr);
    }
  
    
    return answer;
}