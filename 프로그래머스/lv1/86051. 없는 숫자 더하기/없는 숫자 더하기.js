function solution(numbers) {
    
    let num = [];
    for(let i=0; i<=9; i++){
        if(!numbers.includes(i)) num.push(i);
    }

    return num.reduce((acc, curr) => acc + curr, 0);

}