function solution(a, b) {
    let gcd = 1;

    for (let i = 2; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) gcd = i;
    }
    
    const gcdB = b / gcd;
    let checkGcdB = [];
    
    for (let i = 2; i <= gcdB; i++) {
        if (gcdB % i === 0) checkGcdB.push(i)
    }
    
    const primeGcdB = [];
    
    for (let i = 0; i <= checkGcdB.length; i++) {
        let prime = 0;
        for (let j = 2; j <= checkGcdB[i]; j++) {
            if (checkGcdB[i] % j === 0) prime++;
        }
        if (prime === 1) primeGcdB.push(checkGcdB[i]);
    }
    
    let result = [];
    
    for (let i = 0; i < primeGcdB.length; i++) {
        if (primeGcdB[i] == 2 || primeGcdB[i] == 5) result.push("t");
        else result.push("f")
    }
    
    return result.includes("f") ? 2 : 1;
}