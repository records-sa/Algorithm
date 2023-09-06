function solution(balls, share) {
    
    const getFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    return factorial;
}
    
    return Math.round(getFactorial(balls) / (getFactorial(balls - share) * getFactorial(share)));
}
