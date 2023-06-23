function solution(n) {
    let x = Math.sqrt(n);
    return Number.isInteger(x) === true ? Math.pow(x + 1, 2) : -1;
}