function solution(numbers) {
    
    // nums 배열을 구분자로 split -> nums의 인덱스로 치환
    const nums = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    nums.forEach((item, idx) => {
        numbers = numbers.split(item).join(idx);
    })
    
 
    
  
    
    return Number(numbers);
}