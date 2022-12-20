function solution(array, commands) {
    let answer = commands.map((item, idx) => {
        let [i,j,k] = item;
        const slice = array.slice(i-1, j).sort((a,b) => a - b); 
        return slice[k-1];
    })
    
    return answer;
}