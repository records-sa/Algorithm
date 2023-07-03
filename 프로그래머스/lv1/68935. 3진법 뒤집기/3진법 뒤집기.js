function solution(n) {
    let change3 = n.toString(3);
    let reverse = '';
    let char = change3 + '';
    let division = char.split('');
    for(let i = 1; i <= division.length; i++) {
        reverse += division[division.length - i];
    }
    return parseInt(reverse, 3);
}

/* 다른 풀이
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
*/