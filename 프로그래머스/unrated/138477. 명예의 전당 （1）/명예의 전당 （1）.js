function solution(k, score) {
    let result = [];
    let arrOfHonor = [];
    for (let i = 0; i < score.length; i++) {
        arrOfHonor.push(score[i]);
        arrOfHonor.sort((a, b) => b - a);
        arrOfHonor.slice(0, k + 1);
        if (i < k) {
            result.push(arrOfHonor[i]);
        } else {
            result.push(arrOfHonor[k - 1]);
        }

    }
    return result;
}