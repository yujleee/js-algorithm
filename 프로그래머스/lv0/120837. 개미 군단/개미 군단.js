function solution(hp) {
    const general = Math.floor(hp / 5);
    const sol = Math.floor((hp - (general * 5)) / 3);
    const worker = hp - (general * 5) - (sol * 3);

    return general + sol + worker ;
}