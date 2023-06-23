function solution(n)
{
    let num = ('' + n).split('');
    return num.reduce((sum, current) => +sum + +current, 0);
}