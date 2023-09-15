function solution(score) {
    let average = [];
    
    for (let i = 0; i < score.length; i++) {
        average.push((score[i][0] + score[i][1]) / 2);
    }
    let scoreAverage = [...average].sort((a, b) => b - a);
    
    return average.map((el) => scoreAverage.indexOf(el) + 1);
}