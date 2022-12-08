function solution(s) {
    // indexOf, lastIndexOf 일치하면 뽑기 -> sort
    
    let answer = '';
    
    for(let i=0; i<s.length; i++){
        answer += s.indexOf(s[i]) === s.lastIndexOf(s[i]) ? s[i] : '';
    }
  
    
    return answer.split('').sort().join('');
}




