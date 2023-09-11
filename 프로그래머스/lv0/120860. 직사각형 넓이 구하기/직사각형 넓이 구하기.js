function solution(dots) {
    let width = [];
    let height = [];
    for (let i = 0; i < dots.length; i++) {
        width.push(dots[i][0]);
        height.push(dots[i][1]);
    }
    let sortWidth = width.sort((a, b) => b - a);
    let lengthWidth = sortWidth[0] - sortWidth[3];
    
    let sortHeight = height.sort((a, b) => b - a);
    let lengthHeight = sortHeight[0] - sortHeight[3];
    
    return lengthWidth * lengthHeight;
}