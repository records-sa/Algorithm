// 근의 공식으로 풀기 코드
// 노란색 width = x, 노란색 height = y로 생각 했을 때,
// x * y = yellow, (x+2) * (y+2) = yellow + brown
// y = yellow / x의 y를 2(x+y) + 4 = brown에 적용하면 x로만 된 이차방정식 결과 도출
// 이를 근의 공식 적용 

function solution(brown, yellow) {
    const x = ((brown - 4) / 2 + Math.sqrt(Math.pow((brown - 4) / 2, 2) - 4 * yellow)) / 2;
    const y = yellow / x;
    return [Math.max(x + 2, y + 2), Math.min(x + 2, y + 2)];
}
