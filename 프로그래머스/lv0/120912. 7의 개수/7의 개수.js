function solution(array) {
    const joinArray = array.join('');
    const count7 = joinArray.split('').filter((num) => num == 7);
    return count7.length;
}