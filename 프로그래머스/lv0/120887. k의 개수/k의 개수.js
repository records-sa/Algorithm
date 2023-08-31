function solution(i, j, k) {
    let arrNum = [];
    
    for (let a = i; a <= j; a++) arrNum.push(a);
    const fixArr = arrNum.join('').split('');
    const kCount = fixArr.filter(num => num == k).length;
    return kCount;
}