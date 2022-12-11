function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    num.map((item, idx) => {
        numbers = numbers.replaceAll(item, idx);
    })

    return Number(numbers);
}