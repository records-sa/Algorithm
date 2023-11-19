function solution(n) {
    const arr = [0, 1, 1];
    for (i = 3; i <= n; i++) {
        arr.push(arr[i - 1] % 1234567 + arr[i - 2] % 1234567);
    }
    return arr[n] % 1234567;
}