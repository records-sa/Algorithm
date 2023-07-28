function solution(common) {
    let checkCommon = [];
    for (let i = 0; i < common.length - 1; i++) {
        checkCommon.push(common[i + 1] - common[i]);
    }
    if (checkCommon[0] === checkCommon[1]) {
        return common[common.length - 1] + checkCommon[0];
    } else {
        return common[common.length - 1] * (checkCommon[1] / checkCommon[0]);
    }
}