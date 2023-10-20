function solution(my_string) {
    const answer = new Array(52);
    answer.fill(0);
    const arrUpper = answer.slice(0, 26);
    const arrLower = answer.slice(26);
    
    for (let i = 0; i < my_string.length; i++) {
        const changeAscii = my_string.charCodeAt(i);
        
        if (changeAscii < 91) {
            arrUpper[changeAscii - 65]++;
        } else {
            arrLower[changeAscii - 97]++;
        }
    }
    return [...arrUpper, ...arrLower];
}

