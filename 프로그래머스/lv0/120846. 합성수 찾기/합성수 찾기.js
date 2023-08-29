function solution(n) {
    let arrDivisor = [];
    for (let i = 1; i <= n; i++) {
        let divisor = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) divisor.push(j);
        }
        if (divisor.length >= 3) arrDivisor.push(divisor.length);
    }
    return arrDivisor.length;
}