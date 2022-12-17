function solution(x) {
    const num = String(x);
    let sum = 0;
    
    for(let i=0; i<num.length; i++){
        sum += Number(num[i]);    
    }

    return x % sum === 0;
}