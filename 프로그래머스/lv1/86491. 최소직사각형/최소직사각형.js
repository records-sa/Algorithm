function solution(sizes) {
    let arrL = [];
    let arrS = [];
    for (let i = 0; i < sizes.length; i++) {
        for (let j = 0; j < sizes[i].length - 1; j++) {
            if (sizes[i][j] > sizes[i][j + 1]) {
                arrL.push(sizes[i][j]);
                arrS.push(sizes[i][j + 1])
            } else{
                arrL.push(sizes[i][j + 1]);
                arrS.push(sizes[i][j]);
            }
        }
    }
    return Math.max(...arrL) * Math.max(...arrS);
}

/* 다른 풀이
function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}
*/