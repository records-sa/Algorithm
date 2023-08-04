function solution(num_list) {
    let indexOfLast = num_list.length - 1;
    if (num_list[indexOfLast] > num_list[indexOfLast - 1]) {
        num_list.push(num_list[indexOfLast] - num_list[indexOfLast - 1]);
    } else {
        num_list.push(num_list[indexOfLast] * 2);
    }
    return num_list;
}