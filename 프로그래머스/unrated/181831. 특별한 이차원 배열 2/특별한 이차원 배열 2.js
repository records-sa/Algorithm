function solution(arr) {
    let checkind = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == arr[j][i]) {
                checkind.push(1);
            } else {
                checkind.push(0);
            }
        }
    }
    return checkind.includes(0) ? 0 : 1;
}