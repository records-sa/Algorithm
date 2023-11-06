function solution(s) {
    const answer = [0, 0];
    
    while (s !== '1') {
        const count0 = s.split('1').join('').length;
        const c = s.length - count0;
        const changeBinary = c.toString(2);
        
        answer[0]++;
        
        s = changeBinary;
        
        answer[1] += count0;
    }
    
    return answer;
}