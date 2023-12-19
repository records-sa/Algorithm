function solution(k, m, score) {
    // 1. score 배열 내림차순으로 정렬
    const arrScore = score.sort((a, b) => b - a);
    // 2. m 만큼 나눠서 박스가 몇갠지 구하기
    const appleBox = Math.floor(arrScore.length / m);
    // 3. 사과 박스에서 가장 낮은 점수(m-1 번째 인덱스) 찾아서 배열에 넣기
    const applePrice = [];
    for (i = 1; i <= appleBox; i++) {
        applePrice.push(arrScore[(m * i) - 1]);
    }
    // 4. 이익이 발생하지 않는 경우 0 조건 넣기, 가격 합계 구하기
    if (appleBox === 0) {
        return 0;
    } else {
        return applePrice.reduce((sum, current) => sum + (current * m), 0);
    }
}