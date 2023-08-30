function solution(num_list, n) {
    let answer = [];
    for (let i = 0; i < num_list.length; i += n) {
        let tempArr = num_list.slice(i, i + n);
        answer.push(tempArr);
    }
    return answer;
}