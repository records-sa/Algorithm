function solution(intStrs, k, s, l) {
    let answer = [];
    
    for (let i = 0; i < intStrs.length; i++) {
        let partStrs = intStrs[i].slice(s, s + l);
        if (partStrs > k) answer.push(+partStrs);
    }
    return answer;
}