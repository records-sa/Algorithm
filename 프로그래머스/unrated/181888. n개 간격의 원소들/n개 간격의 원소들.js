function solution(num_list, n) {
    let answer = [];
    answer.push(num_list[0]);
    for (let i = 1; i < num_list.length; i++) {
        if (i % n === 0) {
            answer.push(num_list[i]);
        }
    }
    return answer;
}