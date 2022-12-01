function solution(hp) {
    // 장군개미의 나머지 -> 병정개미의 나머지 -> 일개미의 나머지
    let ants = 0;
   
    const general = Math.floor(hp / 5);
    const sol = Math.floor((hp % 5) / 3);
    const worker = Math.floor((hp % 5) % 3);
    
    ants = general + sol + worker;
    
    
    return ants;
}