function solution(keyinput, board) {
    let result = [];
    let width = 0;
    let height = 0;
    const limitWidth = Math.floor(board[0] / 2);
    const limitHeight = Math.floor(board[1] / 2);
    
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "left" && width > -limitWidth) width--;
        else if (keyinput[i] === "right" && width < limitWidth) width++;
        else if (keyinput[i] === "up" && height < limitHeight) height++;
        else if (keyinput[i] === "down" && height > -limitHeight) height--;
    }
    
    result.push(width);
    result.push(height);
   
    return result;
}