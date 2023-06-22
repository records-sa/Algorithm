function solution(hp) {
    let result = 0;
    const ant_5 = Math.floor(hp / 5);
    result += ant_5;
    const ant_3 = Math.floor((hp % 5) / 3);
    result += ant_3;
    const ant_1 = hp - ((ant_5 * 5) + (ant_3 * 3));
    result += ant_1;
    return result;
}