function solution(arr) {
    let x = 0;
    
    while (!arrEqual(arr, getNextArr(arr))) {
        arr = getNextArr(arr);
        x++
    }
    return x;
}

function getNextArr(arr) {
    const nextArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 === 0) {
            nextArr.push(arr[i] / 2);
        } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
            nextArr.push(arr[i] * 2 + 1);
        } else {
            nextArr.push(arr[i]);
        }
    }
    return nextArr;
}
    
function arrEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}