function solution(s) {
    const arrS = s.split(" ");
    let result = 0;
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] === "Z") {
            result -= +arrS[i - 1];
        } else {
            result += +arrS[i];
        }
    }
    return result;
}