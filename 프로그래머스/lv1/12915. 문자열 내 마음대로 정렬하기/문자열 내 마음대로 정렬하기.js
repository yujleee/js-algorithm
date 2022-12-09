function solution(strings, n) {
    var answer = strings.sort((a,b) => {
        if(a[n] > b[n]){
            return 1;
        } else if (a[n] < b[n]){
            return -1;
        } else if (a[n] === b[n]){
            return (a > b ? 1 : a < b ? -1 : 0);
        }
    })
    
    return answer;
}