function solution(emergency) {
    let result = [];
    const sortEmergency = [...emergency].sort((a, b) => b - a);
    for (let i = 0; i < emergency.length; i++) {
        result.push(sortEmergency.indexOf(emergency[i]) + 1)
    }
    return result;
}