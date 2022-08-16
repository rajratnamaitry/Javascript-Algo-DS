/**
 * Stacks - pop Exercise
 * 
 * Implement the following methods on the Stack class
 * 
 * pop - removes the node at the top of the stack and returns the value of that node.
 * 
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
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
// Note: The tests for pop rely on push working (it has been implemented for you)

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
removed // 1000
stack.size // 2
stack.pop();
stack.pop();
stack.size // 0
