function solution(myString, pat) {
    let findPat = myString.lastIndexOf(pat);
    return myString.slice(0, findPat) + pat;
}