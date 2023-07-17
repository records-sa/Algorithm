function solution(num_list) {
    const multiply = num_list.reduce((a, b) => a * b);
    const squareOfSum = Math.pow(num_list.reduce((a, b) => a + b), 2);
    return multiply < squareOfSum ? 1 : 0;
}