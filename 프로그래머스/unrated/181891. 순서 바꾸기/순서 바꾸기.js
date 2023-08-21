function solution(num_list, n) {
    let devideList = num_list.slice(n);
    let lastedList = num_list.slice(0, n);
    return devideList.concat(lastedList);
}