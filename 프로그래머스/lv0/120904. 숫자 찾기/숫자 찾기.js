function solution(num, k) {
    const changeNum = num + '';
    return changeNum.includes(k) ? changeNum.indexOf(k) + 1 : -1;
}