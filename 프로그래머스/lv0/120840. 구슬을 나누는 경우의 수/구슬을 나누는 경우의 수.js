function solution(balls, share) {
    let factorialN = 1;
    for (let i = 1; i <= balls; i++) {
        factorialN *= i;
    }
    
    let factorialNM = 1;
    for (let j = 1; j <= balls - share; j++) {
        factorialNM *= j;
    }
    
    let factorialM = 1;
    for (let z = 1; z <= share; z++) {
        factorialM *= z;
    }
    return Math.round(factorialN / (factorialNM * factorialM));
}

