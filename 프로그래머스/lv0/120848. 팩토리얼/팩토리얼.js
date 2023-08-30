function solution(n) {
    let arrFactorial = [];
    for (let i = 1; i <= n; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        if (factorial <= n) arrFactorial.push(factorial);
        else break;
    }
    return arrFactorial.length;
}