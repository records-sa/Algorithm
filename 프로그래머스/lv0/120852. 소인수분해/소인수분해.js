function solution(n) {
    let answer = [];
    
    while (n % 2 == 0) {
        answer.push(2);
        n = n / 2;
    }
    for (let i = 3; i <= n; i += 2) {
        while (n % i == 0) {
            answer.push(i);
            n = n / i;
        }
    }
    if ( n > 2) {
        answer.push(n);
    }
    const uniqueAnswer = new Set(answer);
    return [...uniqueAnswer];
}