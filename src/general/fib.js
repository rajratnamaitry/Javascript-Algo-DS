// Recursive fib
function fib(n){
    if(n == 1 || n == 0) return n;
    return fib(n - 1) + fib(n  - 2);
}
console.log('fib',fib(5)); // 5
console.log('fib',fib(12)); // 144
console.log('fib',fib(24)); // 46368

// Optimize fib
function fib2(n, memo = []){
    if(memo[n]) return memo[n];
    if(n <= 2) return 1;
    const f = fib2(n - 1, memo) + fib2(n - 2, memo);
    memo[n] = f;
    return memo[n];
}
console.log('fib optimize',fib2(5)); // 5
console.log('fib optimize',fib2(12)); // 144
console.log('fib optimize',fib2(24)); // 46368
console.log('fib optimize',fib2(100)); // 46368

// loop fib 
function fib3(n){
    const arr = [0,1,1]
    if(n <= 2) return 1;
    for(let i = 3; i <= n; i++){
        arr[i] = arr[ i - 1] + arr[i - 2];
    }
    return arr[n];
}
console.log('fib loop',fib3(5)); // 5
console.log('fib loop',fib3(12)); // 144
console.log('fib loop',fib3(24)); // 46368
console.log('fib loop',fib3(100)); // 46368