function solution(my_string) {
    let answer = [];
    let strIndex = my_string.length;
    for (let i = 1; i <= my_string.length; i++) {
        answer.push(my_string.slice(strIndex - i))
    }
    return answer.sort();
    
}