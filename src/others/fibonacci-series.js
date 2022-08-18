// Recursive
function fibonacciSeries(n){
    if(n == 1 || n == 0) return n;
    return fibonacciSeries(n - 1) + fibonacciSeries(n  - 2);
}
// Optimize
function fibonacciSeriesOpt(n, memo = []){
    if(memo[n]) return memo[n];
    if(n <= 2) return 1;
    const f = fibonacciSeriesOpt(n - 1, memo) + fibonacciSeriesOpt(n - 2, memo);
    memo[n] = f;
    return memo[n];
}
// loop 
function fibonacciSeriesOpt2(n){
    const arr = [0,1,1]
    if(n <= 2) return 1;
    for(let i = 3; i <= n; i++){
        arr[i] = arr[ i - 1] + arr[i - 2];
    }
    return arr[n];
}
module.exports = { fibonacciSeries, fibonacciSeriesOpt , fibonacciSeriesOpt2 };
