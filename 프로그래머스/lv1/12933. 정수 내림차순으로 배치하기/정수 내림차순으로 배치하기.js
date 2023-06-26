function solution(n) {
    const answer = n + '';
    const arr = [...answer];
    const nArr = arr.sort().reverse();
    return +nArr.join('');
}