function solution(numlist, n) {
    const arrNum = numlist.map(num => [num, Math.abs(n - num)]);
    
    arrNum.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    });
    
    const sortedNumbers = arrNum.map(pair => pair[0]);
    return sortedNumbers;
}