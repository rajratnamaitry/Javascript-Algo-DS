/**
 * Divide and Conquer - findRotatedIndex
 * 
 * Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.
 * 
 * Constraints:
 * 
 * Time Complexity - O(log n)
 * 
 * Space Complexity - O(1)
 * 
 */

function findRotatedIndex(array,num) {
    let mid = Math.floor(array.length /2)
    let i = 0;
    while(array[mid]!=num){
        const pre = (array[mid-1] > num) ? array[mid-1] - num : num - array[mid-1] || -1
        const next = (array[mid+1] > num) ? array[mid+1] - num : num - array[mid+1] || -1
        if(array.length == i){
            mid = -1;
            break;
        } else if(pre >= next){
            mid = mid + 1;
        } else  {
            mid = mid - 1;
        } 
        i++;
    }
    console.log('mid',mid)
    return mid 
}
function findRotatedIndex2(array, num) {
    let index = -1;
    const { 0:first , [array.length - 1]:last } = array;
    const firstRes = (num > first) ? num - first : first - num;
    const lastRes = (num > last) ? num - last : last - num;
    const mid = Math.floor(array.length / 2);
    if(firstRes > lastRes){
        // right
        const resIndex = search(array.slice(mid),num);
        if(resIndex != -1){
            index = resIndex + mid
        }
    }else {
        // left 
        index =  search(array.slice(0,mid),num)
    }
    console.log({firstRes,lastRes , index})
}
function search(array, num ) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element == num){
            index = i;
            break;
        }
    }
    return index;
}
findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5