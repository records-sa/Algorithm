function solution(picture, k) {
    const expandedPicture = [];
    
    for (let i = 0; i < picture.length; i++) {
        for (let v = 0; v < k; v++) {
            const newRow = [];
            for (let j = 0; j < picture[i].length; j++) {
                for (let h = 0; h < k; h++) {
                    newRow.push(picture[i][j]);
                }
            }
            expandedPicture.push(newRow.join(''));
        }
    }
    return expandedPicture;
}