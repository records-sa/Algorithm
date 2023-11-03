function solution(l, r) {
    const result = [];
    
    for (let i = l; i <= r; i++) {
        iStr = i + '';
        if (/^[05]+$/.test(iStr)) {
            result.push(i);
        }
    }

    if (result.length === 0) result.push(-1);
    
    return result;
}