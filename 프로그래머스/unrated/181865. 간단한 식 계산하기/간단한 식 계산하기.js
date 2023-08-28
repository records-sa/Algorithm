function solution(binomial) {
    const splitBinomial = binomial.split(" ");
    if (splitBinomial[1] === '+') {
        return +splitBinomial[0] + +splitBinomial[2];
    } else if (splitBinomial[1] === '-') {
        return +splitBinomial[0] - +splitBinomial[2];
    } else {
        return +splitBinomial[0] * +splitBinomial[2];
    }
}