function solution(chicken) {
    let coupon = chicken;
    let serviceChicken = 0;
    
    while (coupon >= 10) {
        const freeChicken = Math.floor(coupon / 10);
        serviceChicken += freeChicken;
        coupon = coupon % 10 + freeChicken;
    }
    return serviceChicken;
}