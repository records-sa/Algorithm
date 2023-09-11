function solution(id_pw, db) {
    let checkDb = [];
    
    for (let i = 0; i < db.length; i++) {
        if (db[i][0] === id_pw[0] && db[i][1] === id_pw[1]) {
            checkDb.push("login")
        } else if (db[i][0] === id_pw[0] && db[i][1] !== id_pw[1]) {
            checkDb.push("wrong pw")
        } else {
            checkDb.push("fail")
        }
    }
    
    if (checkDb.includes("login")) return "login";
    else if (checkDb.includes("wrong pw")) return "wrong pw";
    else return "fail";
}