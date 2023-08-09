function solution(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    const theDay = new Date(`2016-${a}-${b}`);
    return day[theDay.getDay()];
}