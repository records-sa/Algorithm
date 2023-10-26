function solution(numer1, denom1, numer2, denom2) {
    const lcm = (denom1 * denom2) / gcd(denom1, denom2);
    
    const newNumer1 = (lcm / denom1) * numer1;
    const newNumer2 = (lcm / denom2) * numer2;
    const resultNumer = newNumer1 + newNumer2;
    
    const gcdResult = gcd(resultNumer, lcm);
    
    const simplifiedNumer = resultNumer / gcdResult;
    const simplifiedDenom = lcm / gcdResult;
    
    return [simplifiedNumer, simplifiedDenom];
}

function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
}