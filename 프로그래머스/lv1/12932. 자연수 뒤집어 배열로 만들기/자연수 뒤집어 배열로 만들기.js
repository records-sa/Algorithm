function solution(n) {
    let answer = [];
    let numTochar = n + '';
    // 문자형으로 바꿔서 한자리수로 나누기
    let result = [...numTochar.split('')].reverse();
    // 숫자로 다시 바꿔서 새로운 배열에 넣기
    for (let num of result) {
        answer.push(+num);
    }
    return answer;
}