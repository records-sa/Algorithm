function solution(t, p) {
    let partOfNumber = [];
    let countP = p.length;
    let result = 0;
    for (let i = 0; i < t.length - countP + 1; i++) {
        partOfNumber.push(t.substr(i, countP));
    }
    for (let j = 0; j < partOfNumber.length; j++) {
        if (partOfNumber[j] <= p) {
            result++;
        }
    }
    return result;
}