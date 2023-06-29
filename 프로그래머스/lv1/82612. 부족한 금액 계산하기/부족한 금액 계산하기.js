function solution(price, money, count) {
    let playMoney = 0;
    for (let i = 1; i <= count; i++) {
        playMoney += price * i;
    }
    console.log(playMoney);
    return money - playMoney > 0 ? 0 : playMoney - money;
}