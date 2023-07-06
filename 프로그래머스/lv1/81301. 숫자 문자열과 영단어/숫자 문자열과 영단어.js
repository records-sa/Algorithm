function solution(s) {
    const word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let change0 = s.replaceAll(word[0], 0);
    let change1 = change0.replaceAll(word[1], 1);
    let change2 = change1.replaceAll(word[2], 2);
    let change3 = change2.replaceAll(word[3], 3);
    let change4 = change3.replaceAll(word[4], 4);
    let change5 = change4.replaceAll(word[5], 5);
    let change6 = change5.replaceAll(word[6], 6);
    let change7 = change6.replaceAll(word[7], 7);
    let change8 = change7.replaceAll(word[8], 8);
    let change9 = change8.replaceAll(word[9], 9);
    
    return +change9;
}