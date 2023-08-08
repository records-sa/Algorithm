function solution(num_list) {
    let sortedList = num_list.sort((a, b) => a - b);
    return sortedList.slice(0, 5);
}