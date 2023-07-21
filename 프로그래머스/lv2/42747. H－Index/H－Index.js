function solution(citations) {
    const sortedCitatiolns = citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    for(let i = 0; i < citations.length; i++) {
        if (i < sortedCitatiolns[i]) {
            hIndex++;
        }
    }
    return hIndex;
}