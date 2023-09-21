function solution(my_string, m, c) {
    let array = [];
    let result = '';
    
    for (let i = 0; i < my_string.length / m; i++) {
        let sliceStr = my_string.slice(i * m, (i * m) + m);
        array.push(sliceStr);
    }

    for (let i = 0; i < array.length; i++) {
        result += array[i][c - 1];
    }
    return result;
}