function solution(myString) {
    let splitString = myString.split("x");
    return splitString.map((el) => el.length);
}