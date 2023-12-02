function solution(food) {
    // food 배열의 인덱스 순서대로 물, 음식의 갯수(칼로리 = 인덱스)
    // 왼쪽 선수가 먹을 음식 배열 구하기
    const result = [];;
    const left = [];
    
    for (let i = 1; i < food.length; i++) {
        let countFood = Math.floor(food[i] / 2);
        if (countFood > 0) {
            left.push(String(i).repeat(countFood));
        }
    }
    
    result.push(left.join(''));
    // 가운데 0 넣기
    result.push('0');
    // 오른쪽 선수가 먹을 음식 배열 구하기
    result.push(left.reverse().join(''));
    // 배열 합치고 문자열로 바꾸기
    return result.join('');
}

