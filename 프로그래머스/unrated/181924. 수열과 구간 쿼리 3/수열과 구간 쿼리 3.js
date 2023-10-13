function solution(arr, queries) { 
    for (let i = 0; i < queries.length; i++) {
        const front = queries[i][0];
        const back = queries[i][1];

        let temp = 0;
        temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
    }
    return arr;
}