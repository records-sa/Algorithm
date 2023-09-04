function solution(my_str, n) {
    let answer = [];
    let countStr = Math.ceil(my_str.length / n);
    console.log(countStr)
    let arrStr = my_str.split('');
    for (let i = 0; i < countStr; i++) {
        let word = '';
        for (let j = 0; j < n; j++) {
            if (arrStr.length > j) {
                word += arrStr[j];
            }
        }
        answer.push(word);
        arrStr.splice(0, n);
    }
    return answer;
}