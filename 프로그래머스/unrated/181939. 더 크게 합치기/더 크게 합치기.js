function solution(a, b) {
    let aToString = a + '';
    let bToString = b + '';
    let numberA = aToString + bToString;
    let numberB = bToString + aToString;
    return numberA > numberB ? +numberA : +numberB;
}