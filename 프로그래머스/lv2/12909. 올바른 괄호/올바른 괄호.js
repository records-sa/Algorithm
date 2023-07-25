function solution(s){
    // stack처럼 사용할 변수 선언
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        // ')'가 먼저 나온 경우 -1이 되므로 false
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}