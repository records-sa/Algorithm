function solution(x) {
    // x의 자릿수 합 구하기
    const xChar = x + '';
    const xArr = [...xChar];
    const xSum = xArr.reduce((a, b) => +a + +b, 0);
    // x % 자릿수 합이 0 인지 아닌지 확인하기
    return x % xSum === 0 ? true : false;
}
