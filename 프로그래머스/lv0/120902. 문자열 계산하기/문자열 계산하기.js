function solution(my_string) {
    const splitStr = my_string.split(' ');
    let result = 0;
    
    if (splitStr[1] === '+') {
        result += +splitStr[0] + +splitStr[2];
    } else if (splitStr[1] === '-') {
        result += +splitStr[0] - +splitStr[2];
    }

    for (let i = 3; i < splitStr.length; i++) {
        if (splitStr[i] === '+') {
            result += +splitStr[i + 1];
        } else if (splitStr[i] === '-') {
            result -= +splitStr[i + 1];
        }
    }
    return result;
}