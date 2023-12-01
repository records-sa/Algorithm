function solution(n, arr1, arr2) {
    // 배열 2진수로 바꾸기
    const changeArr1 = [];
    const changeArr2 = [];
    
    for (let i = 0; i < arr1.length; i++) {
        changeArr1.push(arr1[i].toString(2).padStart(n, 0));
    }
    for (let i = 0; i < arr2.length; i++) {
        changeArr2.push(arr2[i].toString(2).padStart(n, 0));
    }
    
    // 두 배열 더하기
    const sumArr = [];
    for (let j = 0; j < changeArr1.length; j++) {
        sumArr.push(String(+changeArr1[j] + +changeArr2[j]).padStart(n, 0));
    }
    // 문자열로 바꾸기
    const answer = [];
    for (let num of sumArr) {
        answer.push(num
                    .split("")
                    .map((item) => (item === "0" ? (item = " ") : (item = '#')))
                    .join("")
                   );
    }
    return answer;
}