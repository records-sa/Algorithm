function solution(my_string) {
    for (let i = 0; i < my_string.length; i++) {
        if (isNaN(my_string[i])) {
            my_string = my_string.replace(my_string[i], '*')
        }
    }
    return my_string.split('*').reduce((a, b) => +a + +b, 0);
}