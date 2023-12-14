function solution(num, total) {
    const result = [];
    
    const avg = Math.ceil(total / num);
    const x = Math.trunc(num / 2);
    const startNum = avg - x;
    console.log(startNum);
    
    for (let i = 0; i < num; i++) {
        result.push(startNum + i);
    }
    
    return result;
}