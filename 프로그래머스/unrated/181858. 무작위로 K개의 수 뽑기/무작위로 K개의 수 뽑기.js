function solution(arr, k) {
    const map = new Map();
    let answer = [];

    // Map 자료형을 통해 Key 가 중복되지 않은 형태로 데이터 가공
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const keys = [...map.keys()];

        if (keys.length < k) 
        {
            map.set(item, map.get(item) ? map.get(item) + 1 : 1);
        }
    }
    // console.log('map ', map);

    // 앞 전 for 문에서 가공한 Map 데이터셋의 키만 뽑아 배열로 펼침
    answer = [...map.keys()];
    // if ([...map.keys()].length === k) answer = [...map.keys()];

    // 위의 if 문을 주석 처리하고 while 문 하나로 정답 처리를 한 이유
    // 상단의 for 문에서 처리한 answer 의
    // 1) 길이가 k 와 같으면 while 문이 실행되지 않음 => answer.length === k
    // 2) 길이가 k 가 될 때까지 반복하므로 남은 빈 자리를 -1 로 채워줄 수 있음
    while (answer.length < k) {
        answer.push(-1);
    }

    return answer;
}



// 먼저 풀었던 방법 -> 제출하면 실패

// function solution(arr, k) {
//     const randomArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             randomArr.push(arr[i]);
//         }
//     }

//     const randomArrLength = randomArr.length;

//     if (randomArrLength !== k) {
//         if (randomArrLength < k) {
//             const remaining = k - randomArrLength;
//             for (let i = 0; i < remaining; i++) {
//                 randomArr.push(-1);
//             }
//         } else {
//             randomArr.length = k; 
//         }
//     }
//     return randomArr;
// }

