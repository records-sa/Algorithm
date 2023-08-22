function solution(n_str) {
    if (n_str.indexOf(0) !== 0) {
        return n_str;
    } else {
        let findIndex = [];
        for (let i = 0; i < n_str.length; i++) {
            if (n_str[i] > 0) {
                findIndex.push(i);
            }
        }
        return n_str.slice(findIndex[0]);
    }
}