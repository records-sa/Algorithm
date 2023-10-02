function solution(myString, pat) {
    let answer = 0;
    const len = pat.length;
    
    for (let i = 0; i < myString.length; i++) {
        let str = myString.slice(i, len + i);
        if (str === pat) answer++;
    }
    return answer;
}