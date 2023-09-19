function solution(my_string, overwrite_string, s) {
    const frontString = my_string.slice(0, s);
    const backString = my_string.slice(s + overwrite_string.length);
    return frontString + overwrite_string + backString;
}