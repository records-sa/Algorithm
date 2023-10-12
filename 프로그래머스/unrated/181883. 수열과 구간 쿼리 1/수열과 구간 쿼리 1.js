function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        const s = queries[i][0];
        const e = queries[i][1];
        for (let j = s; j <= e; j++) {
            arr[j]++;
        }
    }
    return arr;
}