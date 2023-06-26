function solution(babbling) {
    let answer = 0;
    let baby = ["aya", "ye", "woo", "ma" ];
    let impossible = ["ayaaya", "yeye", "woowoo", "mama" ];
    function check(word) { 
        word = word.replace(impossible[0], "NO");
        word = word.replace(impossible[1], "NO");
        word = word.replace(impossible[2], "NO");
        word = word.replace(impossible[3], "NO");
        word = word.replaceAll(baby[0], "%");
        word = word.replaceAll(baby[1], "%");
        word = word.replaceAll(baby[2], "%");
        word = word.replaceAll(baby[3], "%");
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