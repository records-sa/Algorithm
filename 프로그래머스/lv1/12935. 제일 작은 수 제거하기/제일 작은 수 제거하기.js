function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } else {
        const arrMin = Math.min.apply(null, arr);
        return arr.filter(num => num != arrMin);
    }
}