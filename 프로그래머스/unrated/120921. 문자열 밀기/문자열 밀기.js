function solution(A, B) {
    let result = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (A === B) {
            return result;
        } else {
            const sliceA = A.slice(0, A.length - 1);
            const lastOne = A.slice(A.length - 1);
            const newA = lastOne + sliceA;
            
            result++;
            
            A = newA;
        }
    }
    return -1;
}