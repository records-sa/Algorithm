function solution(strArr) {
    const countStr = strArr.map((el) => el.length)
    const maxStr = Math.max(...countStr);
    const arrLength = new Array(maxStr + 1).fill(0);
    
    countStr.forEach((el) => arrLength[el]++);
    
    return Math.max(...arrLength);
}