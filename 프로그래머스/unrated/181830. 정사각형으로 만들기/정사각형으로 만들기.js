function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        const lengthRow = arr.length;
        const lengthColumn = arr[i].length;
        console.log(lengthRow, lengthColumn)
        if (lengthRow > lengthColumn) {
            const columnToAdd = lengthRow - lengthColumn;
            for (let j = 0; j < columnToAdd; j++) {
                arr[i].push(0);
            }
        } else if (lengthRow < lengthColumn) {
            const rowToAdd = lengthColumn - lengthRow;
            for (let j = 0; j < rowToAdd; j++) {
                const newArr = new Array(lengthColumn);
                newArr.fill(0);
                arr.push(newArr);
            }
        }
    }
    return arr;
}