function solution(n) {
    if (n % 2 !== 0) {
        let sumOdd = 0;
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                sumOdd += i;
            }
        }
        return sumOdd;
    } else {
        let sumEven = 0;
        for (let j = 1; j <= n; j++) {
            if (j % 2 === 0) {
                sumEven += Math.pow(j, 2);
            }
        }
        return sumEven;
    }
}