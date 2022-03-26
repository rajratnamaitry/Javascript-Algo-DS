/**
 * BinaryHeap - insert Exercise
 * 
 * Implement the following functions on the maxBinaryHeap class
 * 
 * insert
 * 
 * Implement the `insert` function on the `MaxBinaryHeap.prototype`: This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.
 * 
 * binaryHeap = new MaxBinaryHeap()
 * binaryHeap.insert(1)
 * binaryHeap.values[0] // 1
 *  
 * binaryHeap.insert(2)
 * binaryHeap.values[0] // 2
 *  
 * binaryHeap.values // [2, 1]
 *  
 * binaryHeap.insert(3)
 * binaryHeap.values[0] // 3
 *  
 * binaryHeap.values // [3, 1, 2]
 *  
 * binaryHeap.insert(4)
 * binaryHeap.values[0] // 4
 *  
 * binaryHeap.values // [4, 3, 2, 1]
 *  
 * binaryHeap.insert(5)
 * binaryHeap.values[0] // 5
 *  
 * binaryHeap.values // [5, 4, 2, 1, 3]
 *  
 * binaryHeap.insert(6)
 * binaryHeap.values[0] // 6
 *  
 * binaryHeap.values // [6, 4, 5, 1, 3, 2]
 */
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);



