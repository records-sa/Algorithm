function solution(my_string, queries) {
    for (let i = 0; i < queries.length; i++) {
        let front = my_string.slice(0, queries[i][0]);
        let middle = my_string.slice(queries[i][0], queries[i][1] + 1);
        let back = my_string.slice(queries[i][1] + 1);
        let changeMiddle = '';
        
        for (let j = middle.length - 1; j >= 0; j--) {
            changeMiddle += middle[j];
        }
        my_string = front + changeMiddle + back;
    }
    return my_string;
}