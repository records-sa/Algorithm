function solution(age) {
    const planet962 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let age962 = '';
    let changeAge = age + '';
    for (let i = 0; i < changeAge.length; i++) {
        age962 += planet962[changeAge[i]];
    }
    return age962;
}