function solution(numbers) {
    let calNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            calNumbers.push(numbers[i] * numbers[j]);
        }
    }
    const sortNumbers = calNumbers.sort((a, b) => b - a);
    return sortNumbers[0];
}