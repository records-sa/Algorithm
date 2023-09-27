function solution(n, slicer, num_list) {
    if (n === 1) {
        return num_list.slice(0, slicer[1] + 1);
    } else if (n === 2) {
        return num_list.slice(slicer[0]);
    } else if (n === 3) {
        return num_list.slice(slicer[0], slicer[1] + 1);
    } else {
        let sliceList =  num_list.slice(slicer[0], slicer[1] + 1);
        console.log(sliceList)
        let result = [];
        for (let i = 0; i < sliceList.length; i += slicer[2]) {
            result.push(sliceList[i]);
        }
        return result;
    }
}