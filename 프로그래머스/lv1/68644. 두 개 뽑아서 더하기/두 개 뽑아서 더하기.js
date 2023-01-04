function solution(numbers) {
    var answer = [];
    
    let i=0;
    let j=1;
    while(i < numbers.length){
        if(i !== j){
           const num = numbers[i] + numbers[j];
        answer.findIndex((value) => value === num) !== -1 ? j++ : answer.push(num); 
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