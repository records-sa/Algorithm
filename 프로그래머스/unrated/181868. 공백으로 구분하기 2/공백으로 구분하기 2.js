function solution(my_string) {
    const arrString = my_string.split(' ');
    let result = [];
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i] !== '') {
            result.push(arrString[i]);
        }
    }
    return result;
}