function solution(order) {
    const charOrder = order + '';
    let answer = 0;
    for (let i = 0; i < charOrder.length; i++) {
        if (charOrder[i] == 3 || charOrder[i] == 6 || charOrder[i] == 9) {
            answer++;
        }
    }
    return answer;
}