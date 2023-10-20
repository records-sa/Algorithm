function solution(str_list) {
    const indexL = str_list.indexOf('l');
    const indexR = str_list.indexOf('r');

    if (indexL === -1 && indexR === -1) {
        return [];
    }  else if (indexL === -1 || (indexR !== -1 && indexR < indexL)) {
        return indexR === str_list.length ? [] : str_list.slice(indexR + 1);
    } else {
        return indexL === 0 ? [] : str_list.slice(0, indexL);
    }
}