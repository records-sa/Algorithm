function solution(num_list) {
    if (num_list.length >= 11) {
        return num_list.reduce((a, b) => a + b);
    } else {
        return num_list.reduce((a, b) => a * b);
    }
}