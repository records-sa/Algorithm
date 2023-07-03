function solution(n, m) {
    let answer = [];
    // 최대 공약수 구하기
    let getGCD = (num1, num2) => {
        let gcd = 1;
        for (let i = 2; i <= Math.min(num1, num2); i++) {
            if (num1 % i === 0 && num2 % i ===0) {
                gcd = i;
            }
        }
        return gcd;
    }
    // 최소 공배수 구하기
    let getLCM = (num1, num2) => {
        let lcm = 1;
        while(true) {
            if((lcm % num1 == 0) && (lcm % num2 == 0)) {
                break;
            }
            lcm++;
        }
        return lcm;
    }
    answer.push(getGCD(n, m));
    answer.push(getLCM(n, m));
    return answer;
}