function solution(s) {
    const answer = s.split(' ').map((word) => {
        const changedWord = word.split('').map((w, idx) => idx % 2 === 0? w.toUpperCase() : w.toLowerCase());
        return changedWord.join('');
    });
    
    return answer.join(' ');
}