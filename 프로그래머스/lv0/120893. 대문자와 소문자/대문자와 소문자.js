function solution(my_string) {
    return my_string.split('').map((v) => v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).join('');
}