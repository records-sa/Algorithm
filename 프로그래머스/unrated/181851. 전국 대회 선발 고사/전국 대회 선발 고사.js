function solution(rank, attendance) {
    const students = [];
    
    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i]) students.push(rank[i]);
    }
    
    const sortedStudents = students.sort((a, b) => a - b);
    
    const first = rank.indexOf(sortedStudents[0]);
    const second = rank.indexOf(sortedStudents[1]);
    const third = rank.indexOf(sortedStudents[2]);
    
    return 10000 * first + 100 * second + third;
}