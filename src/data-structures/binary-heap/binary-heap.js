/**
 * BinaryHeap - insert Exercise
 * 
 * Implement the following functions on the BinaryHeap class
 * 
 * insert
 * 
 * Implement the `insert` function on the `BinaryHeap.prototype`: This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.
 * 
 */
  /**
 * BinaryHeap - extractMax Exercise
 * 
 * Implement the following functions on the BinaryHeap class
 * 
 * extractMax
 * 
 * 
 * Implement the `extractMax` function on the `BinaryHeap.prototype`: This function should remove the root node in a binary heap. Make sure to re-order the heap after removal if necessary.
 */
 class BinaryHeap { 
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(parent >= element) break;
            this.values[idx] = parent;
            this.values[parentIdx] =  element;
            idx = parentIdx;
        }
    }
  
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();            
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if(leftChild > element){
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if((swap == null && rightChild > element) 
                || (swap != null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            if(swap == null) break;
            [this.values[swap],this.values[idx]] = [this.values[idx], this.values[swap]];
            idx = swap;
        }
    }
}
// let heap = new BinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
// console.log('head',heap.values)// [55, 39, 41, 18, 27, 12, 33]
// heap.extractMax();
// console.log('head',heap.values) // [41, 39, 33, 18, 27, 12]
module.exports.BinaryHeap = BinaryHeap;