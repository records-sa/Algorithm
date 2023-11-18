function solution(n) {
    function countOnes(binaryStr) {
        return binaryStr.split('1').length - 1;
    }
    
    const binaryN = n.toString(2);
    const onesCount = countOnes(binaryN);
    
    while(true) {
        n++;
        const binaryNext = n.toString(2);
        
        if (countOnes(binaryNext) === onesCount) {
            return n;
        }
    }
}