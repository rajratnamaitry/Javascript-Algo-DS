/**
 * Queues - enqueue Exercise
 * 
 * Implement the following methods on the Queue class.
 * 
 * 0
 * enqueue
 * 
 * This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.
 * 

 */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
var queue = new Queue();
queue.enqueue(10) // 1
queue.size // 1
queue.enqueue(100) // 2
queue.size // 2
queue.enqueue(1000) // 3
queue.size // 3