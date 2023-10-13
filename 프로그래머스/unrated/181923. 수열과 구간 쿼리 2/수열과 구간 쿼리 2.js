function solution(arr, queries) {
    let result = [];
    
    for (let i = 0; i < queries.length; i++) {
        const s = queries[i][0];
        const e = queries[i][1];
        const k = queries[i][2];
        let partOfArr = [];
        
        for (let j = s; j <= e; j++) {
            if (arr[j] > k) partOfArr.push(arr[j]);
        }

        if (partOfArr.length !== 0) {
            partOfArr.sort((a, b) => a - b);
            result.push(partOfArr[0]);
        } else {
            result.push(-1);
        }
    }
    return result;
}