class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.pre = null;
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
      if(!this.head) return null;
      const popNode = this.tail;
      if(this.length == 1){
          this.head = null
          this.tail = null
      }else {
        this.tail = popNode.pre;
        this.tail.next = null;
        popNode.pre = null;
      }
      this.length--;
      return popNode;    
    }
    shift(){
        if(this.length==0) return undefined;
        const oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head = oldHead.next
            this.head.pre = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unShift(val){
        const newNode = new Node(val);
        if(!this.length == 0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.pre = newNode
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let counter , current;
        if((this.length / 2) > index){
            current = this.head;
            counter  = 0;
            while (counter != index) {
                current = current.next;
                counter++;
            }
        }else {
            counter  = this.length - 1;
            current = this.tail;
            while (counter != index) {
                current = current.pre;
                counter--;
            }
        }
        return current;
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