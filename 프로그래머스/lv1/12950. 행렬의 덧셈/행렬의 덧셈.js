function solution(arr1, arr2) {
    const numRows = arr1.length;
    const numCols = arr1[0].length;
    let answer = [];
    
    for (let i = 0; i < numRows; i++) {
        const row = [];
        
        for (let j = 0; j < numCols; j++) {
            const sum = arr1[i][j] + arr2[i][j];
            row.push(sum);
        }
        answer.push(row);
    }
    return answer;
}