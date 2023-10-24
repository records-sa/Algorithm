function solution(name, yearning, photo) {
    let score = [];
    
    for (let i = 0; i < photo.length; i++) {
        let plusScore = 0;
        for (let j = 0; j < photo[i].length; j++) {
            const findScore = name.indexOf(photo[i][j]);
            
            if (findScore !== -1) {
                plusScore += yearning[findScore];
            }
       }
        score.push(plusScore)
    }
    return score;
}
