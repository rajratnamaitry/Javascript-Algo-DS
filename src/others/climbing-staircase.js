/**
 * Problem - Given a staircase of 'n' steps, count the number fo distinct ways to climb to the top you can either climb 1 step or 2 steps at a time
 *  Example :
 *  n=1, climbingStaircase(1) = 1 | (1)
 *  n=2, climbingStaircase(2) = 2 | (1, 1) and (2)
 *  n=3, climbingStaircase(3) = 3 | (1, 1, 1) (1, 2) and (2,1)
 *  n=4, climbingStaircase(5) = 5 | (1, 1, 1, 1) (2,2) (1, 1, 2) (1, 2, 1) and (2, 1, 1)
 */
function climbingStaircase(n) {
    const noWays= [1, 2]
    for (let i = 2; i <= n; i++) {
        noWays[i] = noWays[i - 1] + noWays[i - 2];
    }
    return noWays[n - 1]
}
module.exports.climbingStaircase = climbingStaircase;
