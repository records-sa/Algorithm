function solution(myStr) {
    let splitA = myStr.split('a');
    let splitB = [];
    
    for (let i = 0; i < splitA.length; i++) {
        if (splitA[i].includes('b')) {
            splitB.push(...splitA[i].split('b'))
        } else {
            splitB.push(splitA[i]);
        }
    }

    let splitC = [];
    for (let i = 0; i < splitB.length; i++) {
        if (splitB[i].includes('c')) {
            splitC.push(...splitB[i].split('c'))
        } else {
            splitC.push(splitB[i]);
        }
    }

    let result = [];
    for (let i = 0; i < splitC.length; i++) {
        if (splitC[i].length !== 0) {
            result.push(splitC[i])
        }
    }
    
    if (result.length === 0) {
        result.push("EMPTY");
        return result;
    } else return result;
}