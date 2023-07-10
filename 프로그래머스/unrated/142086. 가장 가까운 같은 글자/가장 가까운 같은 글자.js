function solution(s) {
    let answer = [];
    let confirm = [];    // 검사 완료한 문자를 넣는 새로운 배열
    
    for (let i = 0; i < s.length; i++) {
      // 검사 완료한 배열에 현재 검사하는 문자가 있으면
      if (confirm.includes(s[i])) {
          answer.push(confirm.length - confirm.lastIndexOf(s[i]));
          confirm.push(s[i]);
      // 검사 완료한 배열에 현재 검사하는 문자가 없으면
      } else {
          answer.push(-1);
          confirm.push(s[i]);
      }
    }
    return answer;
}

/* value 값이 마지막으로 나온 인덱스 구하기
string.lastIndexOf(value) */