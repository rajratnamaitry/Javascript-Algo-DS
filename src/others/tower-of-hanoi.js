/**
 *  O(2^n)
 */
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if(n==1){
        console.log('Move 1 Disc from A to C')
        return 
    }
    towerOfHanoi(n-1,fromRod,usingRod,toRod);
    console.log(`Move ${n} Disc from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1,usingRod,toRod,fromRod);
}
towerOfHanoi(3, 'A', 'C', 'B')
module.exports.towerOfHanoi = towerOfHanoi;