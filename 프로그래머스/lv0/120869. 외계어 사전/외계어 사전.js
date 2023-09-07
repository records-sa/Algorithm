function solution(spell, dic) {
    const sortDic = dic.filter((el) => el.length === spell.length);

    for (let i = 0; i < sortDic.length; i++) {
        for (let j = 0; j < spell.length; j++) {
            sortDic[i] = sortDic[i].replace(spell[j], "")
        }
    }
    
    const checkDic = sortDic.map((el) => el.length);
    
    return checkDic.includes(0) ? 1 : 2;
}