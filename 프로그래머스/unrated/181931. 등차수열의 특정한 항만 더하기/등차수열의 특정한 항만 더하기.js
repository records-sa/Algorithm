function solution(a, d, included) {
    let arrNum = [];
    let result = [];
    
    for (let i = 0; i < included.length; i++) {
        arrNum.push(a + (d * i));
    }

    for (let j = 0; j < included.length; j++) {
        if (included[j]) result.push(arrNum[j]);
    }
    return result.reduce((a, b) => a + b);
}