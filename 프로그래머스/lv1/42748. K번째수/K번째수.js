function solution(array, commands) {
    let sliceArr = [];
    let answer = [];
    // 배열 자르기, 오름차순으로 정렬하기
    for (let i = 0; i < commands.length; i++) {
        let slice1 = array.slice(commands[i][0] - 1, commands[i][1]);
        sliceArr.push(slice1.sort((a, b) => a - b));
        console.log(sliceArr);
        // k번째 숫자 빼서 리턴
        const ind = commands[i][2] - 1;
        answer.push(sliceArr[i][ind]);
    }
    return answer;
}