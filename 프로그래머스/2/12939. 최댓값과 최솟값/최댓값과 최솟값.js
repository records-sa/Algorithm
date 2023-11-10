function solution(s) {
    let answer = '';
    const arrS = s.split(' ');
    
    arrS.sort((a, b) => +a - +b);
    
    answer += arrS[0] + '';
    answer += ' ';
    answer += arrS[arrS.length - 1] + '';
    
    return answer;
}