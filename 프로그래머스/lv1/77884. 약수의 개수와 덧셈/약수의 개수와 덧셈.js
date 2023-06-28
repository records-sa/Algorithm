function countDivisor(num) {
    let count = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    let result = 0;
    for(let i = left; i <= right; i++) {
        if (countDivisor(i) % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }
    return result;
}
