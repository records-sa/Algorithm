function solution(myString, pat) {
    let changeMyString = myString.toLowerCase();
    let changePat = pat.toLowerCase();
    return changeMyString.includes(changePat) ? 1 : 0;
}