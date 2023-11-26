function solution(s) {
    const arrS = s.split(' ');
    let toJadenCase = '';
    
    for (let i = 0; i < arrS.length; i++) {
        for (let j = 0; j < arrS[i].length; j++) {
            if (j === 0) {
                toJadenCase += arrS[i][j].toUpperCase();
            } else {
                toJadenCase += arrS[i][j].toLowerCase();
            }
        }
        if (i < arrS.length - 1) {
            toJadenCase += ' ';
        }
    }
    return toJadenCase;
}