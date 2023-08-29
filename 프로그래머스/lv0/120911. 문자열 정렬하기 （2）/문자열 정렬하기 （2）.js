function solution(my_string) {
    let strToLowerCase = my_string.toLowerCase();
    return [...strToLowerCase].sort().join('');
}