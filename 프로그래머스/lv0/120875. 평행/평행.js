function solution(dots) {
    let result = [];
    
    // 선분의 기울기가 일치하면 평행
    for(let i=0; i<dots.length; i++){
        for(let j=i+1; j<dots.length; j++){
            const slope = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0]);
            console.log(slope, result);
            
            if(result.includes(slope)){
                return 1;
            }
            result.push(slope); 
        }
      
    }
    
    return 0;
}

