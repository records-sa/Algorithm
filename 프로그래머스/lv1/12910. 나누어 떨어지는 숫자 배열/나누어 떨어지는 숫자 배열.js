function solution(arr, divisor) {
    let answer = [];
    for (let num of arr) {
        if (num % divisor === 0) {
            answer.push(num);
        }
    }
    if (answer.length === 0) {
        answer.push(-1);
    } else {
        answer.sort((a, b) => a - b);
    }
    return answer;
}