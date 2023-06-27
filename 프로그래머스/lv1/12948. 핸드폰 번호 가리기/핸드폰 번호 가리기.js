function solution(phone_number) {
    let answer = '';
    let checkIndex = phone_number.length - 4;
    for (let i = 0; i < phone_number.length; i++) {
        if (i < checkIndex) {
            answer += '*';
        } else {
            answer += phone_number[i];
        }
    }
    return answer;
}
