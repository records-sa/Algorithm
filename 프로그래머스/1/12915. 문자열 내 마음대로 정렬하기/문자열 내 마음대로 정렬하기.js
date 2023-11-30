function solution(strings, n) {
    const answer = strings.sort();
    answer.sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
    return answer;
}