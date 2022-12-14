function solution(arr)
{
    var answer = [];
    
    answer.push(arr[0]);
    
    for(let i=1; i<arr.length; i++){
        const n = answer.pop();
        if(n === arr[i]){
            answer.push(n);
        } else{
            answer.push(n);
            answer.push(arr[i]);
        }
    }
    
    return answer;
}