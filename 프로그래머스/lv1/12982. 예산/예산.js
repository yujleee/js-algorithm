function solution(d, budget) {
  
   
    return  d.sort((a,b) => a - b).reduce((acc, curr) => acc + ((budget -= curr) >= 0), 0);
}