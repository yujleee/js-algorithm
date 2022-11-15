function solution(array) {
    // Map 객체 생성
    // - 요소별 reduce()로 빈도수 카운트 누적하기
    
    let map = new Map();
    
    // Map 객체 초기화
    for(let i = 0; i <= Math.max(...array); i++){
        map.set(i, 0);    
    }
    
    // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
    for(let i = 0; i < array.length; i++){
        map.set(array[i], map.get(array[i]) + 1);
    }
    
    let arr = Array.from(map.values());
    let max = Math.max(...arr);
    
    // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
        return -1;
    } else {
        return arr.indexOf(max);
    }
    

}