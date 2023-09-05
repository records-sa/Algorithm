function solution(numbers) {
    const english = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < english.length; i++) {
        numbers = numbers.replaceAll(english[i], i);
    }
    return +numbers;
}