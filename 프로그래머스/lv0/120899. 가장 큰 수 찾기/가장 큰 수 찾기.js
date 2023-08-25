function solution(array) {
    let answer = [];
    const sortNum = [...array].sort((a, b) => b - a);
    answer.push(sortNum[0]);
    answer.push(array.indexOf(sortNum[0]));
    return answer;
}