function solution(s){
    let str = s.toLowerCase().split('');

    return str.filter((char) => char === 'p').length === str.filter((char) => char === 'y').length;
}