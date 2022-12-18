function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<arr1.length; i++){
        let binary = (arr1[i] | arr2[i]).toString(2);
        
        binary = binary.padStart(n, '0').split('');
        
        let decode = binary.map((el) => el === '0' ? ' ' : '#').join('');
        answer.push(decode);
    }
    
    return answer;
}