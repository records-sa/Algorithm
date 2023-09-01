function solution(s) {
    let result = '';
    const sortedS = s.split('').sort();
    for (let i = 0; i < sortedS.length; i++) {
        const countS = sortedS.filter(char => char === sortedS[i]);
        if (countS.length === 1) result += sortedS[i];
    }
    return result;
}