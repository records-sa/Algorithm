function solution(s, n) {
    let answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
        } else if (s[i] === s[i].toUpperCase()) {
            const indUpper = upper.indexOf(s[i]);
            if (indUpper + n < 26) {
                answer += upper[indUpper + n];
            } else {
                answer += upper[(indUpper + n) - 26];
            }
        } else {
            const indLower = lower.indexOf(s[i]);
            if (indLower + n < 26) {
                answer += lower[indLower + n];
            } else {
                answer += lower[(indLower + n) - 26];
            }
        } 
    }
    return answer;
}