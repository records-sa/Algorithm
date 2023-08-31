function solution(array, n) {
    let arrDistance = [];
    for (let i = 0; i < array.length; i++) {
        arrDistance.push(Math.abs(array[i] - n));
    }
    
    const minNum = Math.min(...arrDistance);
    const minIndex = arrDistance.indexOf(minNum);
    const minNumbers = [];
    for (let j = 0; j < arrDistance.length; j++) {
        if (arrDistance[j] === minNum) {
            minNumbers.push(array[j]);
        }
    }
    return Math.min(...minNumbers);
}