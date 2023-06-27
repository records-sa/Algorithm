function solution(s) {
    let answer = '';
    let indMid = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        answer += s[indMid - 1];
        answer += s[indMid];
    } else {
        answer += s[indMid];
    }
    return answer;
}