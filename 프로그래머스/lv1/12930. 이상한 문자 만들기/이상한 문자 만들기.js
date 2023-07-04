function solution(s) {
    let answer = '';
    let divisionS = s.split(' ');
    
    for (let i = 0; i < divisionS.length; i++) {
        for (let j = 0; j < divisionS[i].length; j++) {
            if (j % 2 === 0) {
                answer += divisionS[i][j].toUpperCase();
            } else {
                answer += divisionS[i][j].toLowerCase();
            }
        }
        if (i < divisionS.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}