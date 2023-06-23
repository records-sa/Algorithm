function solution(s){
    let search = [...s];
    let countP = search.filter((cha) => cha === 'p' || cha === 'P');
    let countY = search.filter((cha) => cha === 'y' || cha === 'Y');
    return countP.length === countY.length ? true : false;
}