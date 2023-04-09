function solution(numbers) {
    var answer = [];
    
    let i=0;
    let j=1;
    while(i < numbers.length){
        if(i !== j){
           const n = numbers[i] + numbers[j];
            answer.findIndex((value) => value === n) !== -1 ? j++ : answer.push(n); 
        } else {
            j++;
        }
        
        if(j === numbers.length){
            ++i;
            j = 1;
        }
    }
    
    return answer.sort((a,b) => a-b);
}