function solution(before, after) {
    const sortedBefore = before.split('').sort();
    const sortedAfter = after.split('').sort();
    let check = 0;
    
    for (let i = 0; i < sortedBefore.length; i++) {
        if (sortedBefore[i] === sortedAfter[i]) check++;
    }
    return after.length === check ? 1 : 0;
}