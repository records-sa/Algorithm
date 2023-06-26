function solution(babbling) {
    let answer = 0;
    let baby = ["aya", "ye", "woo", "ma" ];
    function check(word) { 
        word = word.replace(baby[0], "%");
        word = word.replace(baby[1], "%");
        word = word.replace(baby[2], "%");
        word = word.replace(baby[3], "%");
        word = word.replaceAll("%","");
        if(word === "") {
            answer++;
            return;
        }
        return;
    }
    for (let i = 0; i < babbling.length; i++) {
        check(babbling[i]);
    }
    return answer;
}