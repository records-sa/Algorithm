function solution(s) {
    let result = [];
    for (let num of s) {
        if (!isNaN(num)) {
            result.push(num); 
        } else {
            result.push('%');
        }
    }
    if (s.length === 4 || s.length === 6) {
        return result.includes('%') ? false : true;
    } else {
        return false;
    }
    
}