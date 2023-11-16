function solution(array) {
    const result = {};
    
    array.forEach((num) => {
        result[num] = (result[num] || 0) + 1;
    });
    
    console.log(result)
    
    let modes = [];
    let maxFrequency = 0;
    
    for (const num in result) {
        if (result[num] > maxFrequency) {
            maxFrequency = result[num];
            modes = [ +num ];
        } else if (result[num] === maxFrequency) {
            modes.push(+num);
        }
        console.log(modes)
    }
    
    if (modes.length === 1) return modes[0];
    else return -1;
}