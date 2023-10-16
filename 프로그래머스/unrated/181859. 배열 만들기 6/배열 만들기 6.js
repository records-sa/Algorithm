function solution(arr) {
    let stk = [];
    let idx = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) {
            stk.push(arr[i]);
        } else if (stk.length !== 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop(stk[stk.length - 1]);
        } else if (stk.length !== 0 && stk[stk.length - 1] !== arr[i]) {
            stk.push(arr[i]);
        }
    }
    return stk.length === 0 ? [-1] : stk;
}