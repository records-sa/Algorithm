function solution(quiz) {
    let result = [];
    
    for (let i = 0; i < quiz.length; i++) {
        let splitQuiz = quiz[i].split(" ");
        if (splitQuiz[1] === "+") {
            const answer = +splitQuiz[0] + +splitQuiz[2];
            result.push(answer == splitQuiz[4] ? "O" : "X");
        } else {
            const answer = +splitQuiz[0] - +splitQuiz[2];
            result.push(answer == splitQuiz[4] ? "O" : "X");
        }
    }
    return result;
}