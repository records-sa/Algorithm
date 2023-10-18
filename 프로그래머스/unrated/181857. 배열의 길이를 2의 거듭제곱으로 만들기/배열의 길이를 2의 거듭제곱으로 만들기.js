function solution(arr) {
    const lengthOfArr = arr.length;
    let pow2 = 1;
    
    while (pow2 < lengthOfArr) {
        pow2 *= 2;
    }
    
    if (lengthOfArr !== pow2) {
        const zeroToAdd = pow2 - lengthOfArr;
        const newArr = [...arr];
        
        for (let i = 0; i < zeroToAdd; i++) {
            newArr.push(0);
        }
        return newArr;
    } else {
        return arr;
    }
}