function solution(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}