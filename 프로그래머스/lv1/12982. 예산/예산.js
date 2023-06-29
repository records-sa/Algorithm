function solution(d, budget) {
    let sumAmount = 0;
    let depart = [];
    const dOfAmount = d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        sumAmount += d[i];
        if (sumAmount <= budget) {
            depart.push(d[i]);
        }
    }
    return depart.length;
}