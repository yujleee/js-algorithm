function solution(n) {
    // 인원 수와 6의 최소공배수 구하기
    // 두 수를 lcm으로 나눴을 때 나머지가 0일 때를 찾기
    let lcm = 1;
    
    while(true){
        if((lcm % n) === 0 && (lcm % 6) === 0){
            break;
        }
        lcm++;
    }
    
    return lcm/6;
}