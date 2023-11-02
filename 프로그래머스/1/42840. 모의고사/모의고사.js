function solution(answers) {
    const answer = [];
    const soopoja1 = [1, 2, 3, 4, 5];
    const soopoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const soopoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const score = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === soopoja1[i % 5]) score[0]++;
        if (answers[i] === soopoja2[i % 8]) score[1]++;
        if (answers[i] === soopoja3[i % 10]) score[2]++;
    }
    
    const max = Math.max(...score);
    
    for (let j = 0; j < score.length; j++) {
        if (max === score[j]) answer.push(j + 1);
    }
    return answer;
}