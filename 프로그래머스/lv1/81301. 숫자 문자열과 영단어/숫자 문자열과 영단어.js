function solution(s) {
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i=0; i<nums.length; i++){
        s = s.replaceAll(nums[i], i);
    }
    
    return +s;
}