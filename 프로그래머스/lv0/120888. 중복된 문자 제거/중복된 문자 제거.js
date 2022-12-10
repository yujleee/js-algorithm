function solution(my_string) {
    let set = new Set();
    
    my_string.split('').forEach((char) => set.add(char));
    
    return Array.from(set).join('');
}