function solution(sides) {
    let answer = 0;
    if (sides[0] > sides[1]) {
        answer += sides[0] - (sides[0] - sides[1]);
        answer += (sides[0] + sides[1]) - sides[0] - 1;
    } else {
        answer += sides[1] - (sides[1] - sides[0]);
        answer += (sides[0] + sides[1]) - sides[1] - 1;
    }
    return answer;
}