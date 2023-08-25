function solution(box, n) {
    let volumeBox = box.map((item) => Math.floor(item / n));
    return volumeBox.reduce((a, b) => a * b);
}