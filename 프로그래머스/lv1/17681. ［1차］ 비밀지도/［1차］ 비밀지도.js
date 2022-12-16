function solution(n, arr1, arr2) {
    // arr1 , arr2 돌면서 2진수로 바꿔서 1을 #로 치환
    let answer = [];
    
     for(let i=0; i<arr1.length; i++){
            // 비트 OR 연산자로 1일때 다 합쳐주기
            let binaryNum = (arr1[i] | arr2[i]).toString(2).split('');
           
            // 한 자리수일 경우 변환한게 n의 길이보다 짧으니 앞에 0을 채워줌
            while(binaryNum.length < n){
                binaryNum.unshift('0');
            }
         
            const decodeStr = binaryNum.map((el) => el === '1' ? '#' : ' ').join('');
            answer.push(decodeStr);
            
        }
    

    
    return answer;
}