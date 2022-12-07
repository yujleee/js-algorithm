function solution(d, budget) {
    let answer = 0;
    
    d.sort((a,b) => a-b);
    
     for (let i = 0; i < d.length; i++) {
        budget -= d[i];
        answer += 1;
        
        if (budget < 0){
           answer--;
           break;  
        } 
     
    }
      
    return answer;
}