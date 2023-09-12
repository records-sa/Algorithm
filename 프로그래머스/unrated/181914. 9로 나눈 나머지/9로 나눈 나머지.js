function solution(number) {
    let splitNumber = number.split('');
    const sumNumber = splitNumber.reduce((a, b) => +a + +b);
    return sumNumber % 9;
}