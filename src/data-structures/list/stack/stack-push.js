/**
 * Stacks - push Exercise
 * 
 * Implement the following methods on the Stack class
 * 
 * 
 * push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.
 * 
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
}
var stack = new Stack();

stack.push(10) // 1
stack.first.value // 10
stack.last.value // 10
stack.push(100);
stack.first.value // 100
stack.last.value // 10
stack.push(1000);
stack.first.value // 1000
stack.last.value // 10

var stack = new Stack();

stack.push(10) // 1
stack.size // 1
stack.push(100) // 2
stack.size // 2
stack.push(1000) // 3
stack.size // 3