function solution(quiz) {
    return quiz.map((item) => {
        const q = item.split(' ');
        const sign = q[1] === '-' ? -1 : 1;
        if(+q[0] + (+q[2] * sign) === +q[4]){
            return 'O';
        } else{
            return 'X';
        }
    })

}