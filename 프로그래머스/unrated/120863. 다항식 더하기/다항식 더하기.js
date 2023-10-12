function solution(polynomial) {
    const splitPoly = polynomial.split(' + ');
    console.log(splitPoly)

    // x항 뽑기
    const partOfX = splitPoly.filter((val) => val.includes('x'));
    let calOfX = 0;
    if (partOfX.length !== 0) {
        for (let i = 0; i < partOfX.length; i++) {
            if (partOfX[i] === 'x') {
                calOfX++;
            } else {
                let num = partOfX[i].split('x');
                calOfX += +num[0];
            }
        }
    }

    // 상수항 뽑기
    const partOfNum = splitPoly.filter((val) => !val.includes('x')).map((val) => Number(val));
    let calOfNum = 0;
    if (partOfNum.length !== 0) {
        calOfNum = partOfNum.reduce((a, b) => a + b, 0);
    }
    console.log(typeof calOfX)
    console.log(typeof calOfNum, calOfNum)
    
    // 출력하기
    if (calOfX === 0) return String(calOfNum);
    else if (calOfX === 1 && calOfNum > 0) return `x + ${calOfNum}`;
    else if (calOfX === 1 && calOfNum === 0) return `x`;
    else if (calOfX > 1 && calOfNum === 0) return `${calOfX}x`;
    else return `${calOfX}x + ${calOfNum}`
}
