function solution(numbers) {
    let check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let difference = check.filter(num => !numbers.includes(num));
    return difference.reduce((a, b) => a + b, 0);
}