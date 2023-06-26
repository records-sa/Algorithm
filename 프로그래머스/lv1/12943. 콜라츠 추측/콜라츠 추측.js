function solution(num) {
    let result = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
            result++;
        } else {
            num = num * 3 + 1;
            result++;
        }
    }
    return result > 500 ? -1 : result;
}
// num이 홀수인지 짝수인지 판별하기
// if 로 작업 + 1씩 카운트하기
// num이 1인지 아닌지 확인하기