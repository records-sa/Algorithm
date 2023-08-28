function solution(myString) {
    let result = [];
    const splitmyString = myString.split("x").sort();
    for (let i = 0; i < splitmyString.length; i++) {
        if (splitmyString[i] !== "") {
            result.push(splitmyString[i]);
        }
    }
    return result;
}