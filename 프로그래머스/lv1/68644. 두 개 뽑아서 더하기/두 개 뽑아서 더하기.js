function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}

/* 배열 중복 제거하기
let result1 = [...new Set(answer)];
let result2 = array.filter((v, i) => array.indexOf(v) === i);
let result3 = array.reduce((ac, v) => ac.includes(v) ? ac : [...ac, v], []);
let result4 = [];
for (v of array) {
  if (!result4.includes(v)) result4.push(v);
}
let result5 = Object.keys(Object.fromEntries(array.map(v => [v, 0])));
*/