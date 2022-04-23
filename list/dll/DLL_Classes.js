class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
// // Get
// console.log('10',doublyLinkedList.get(1).val) // 10
// console.log('5',doublyLinkedList.get(0).val) // 5
// console.log('15',doublyLinkedList.get(2).val) // 15
// console.log('20',doublyLinkedList.get(3).val) // 20
// console.log('null',doublyLinkedList.get(4)) // null
// //Pop
// doublyLinkedList.push(5); // doublyLinkedList
// console.log('1',doublyLinkedList.length); // 1
// console.log('5',doublyLinkedList.head.val); // 5
// console.log('5',doublyLinkedList.tail.val); // 5
// console.log('null',doublyLinkedList.head.prev) // null
// doublyLinkedList.push(10); //doublyLinkedList 
// console.log('2',doublyLinkedList.length); // 2
// console.log('5',doublyLinkedList.head.val); // 5
// console.log('10',doublyLinkedList.head.next.val); // 10
// console.log('10',doublyLinkedList.tail.val); // 10
// console.log('10',doublyLinkedList.head.next.prev.val) // 10
// doublyLinkedList.push(15);// doublyLinkedList
// console.log('3',doublyLinkedList.length); // 3
// console.log('5',doublyLinkedList.head.val); // 5
// console.log('15',doublyLinkedList.tail.val); // 15
// console.log('10',doublyLinkedList.tail.prev.val); // 10
// console.log('15',doublyLinkedList.head.next.next.val); // 15
// console.log('15',doublyLinkedList.pop().val); // 15
// console.log('2',doublyLinkedList.length); // 2
// console.log('10',doublyLinkedList.pop().val); // 10
// console.log('1',doublyLinkedList.length); // 1
// console.log('5',doublyLinkedList.pop().val); // 5
// console.log('0',doublyLinkedList.length); // 0
// console.log('undefined',doublyLinkedList.pop()); // undefined
// console.log('0',doublyLinkedList.length); // 0
// // remove
// console.log('15',doublyLinkedList.remove(2).val); // 15
// doublyLinkedList.remove(100); // undefined
// console.log('3',doublyLinkedList.length) // 3
// console.log('5',doublyLinkedList.head.val) // 5
// console.log('10',doublyLinkedList.head.next.val) // 10
// console.log('20',doublyLinkedList.head.next.next.val) // 20
// // reverse
// doublyLinkedList.reverse(); // singlyLinkedList;