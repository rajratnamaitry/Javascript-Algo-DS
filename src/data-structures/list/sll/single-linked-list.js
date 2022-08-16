class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
    printRec(){
        const values = [];
        const traverse = (node,values) =>{
            if(node === null) return null;
            values.push(node.val);
            traverse(node.next,values)
        }
        traverse(this.head,values)
        return values;
    }
    sumList(head = this.head){
        if(head == null) return 0;
        return head.val + this.sumList(head.next)
    }
    findRec(val, head = this.head){
        if(head === null) return false;
        if(head.val == val) return true;
        return this.findRec(val, head.next);
    }
    getNode(index, head = this.head){
        if(head == null) return null;
        if(index == 0) return head.val;
        return this.getNode(index - 1 , head.next);
    }
    ziperList(head1, head2){
        if(head1 == null && head2 == null) return null;
        if(head1 == null) return head2;
        if(head2 == null) return head1;
        const next1 = head1.next;
        const next2 = head2.next;
        head1.next = head2;
        head2.next = this.ziperList(next1,next2);
        return head1;
    }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
console.log('print',singlyLinkedList.printRec())
console.log('sumList',singlyLinkedList.sumList())
console.log('findRec',singlyLinkedList.findRec(10))
console.log('getNode',singlyLinkedList.getNode(3))
var singlyLinkedList2 = new SinglyLinkedList();
singlyLinkedList2.push(7).push(13).push(17)
console.log('getNode',singlyLinkedList.ziperList(singlyLinkedList.head,singlyLinkedList2.head))
console.log('print',singlyLinkedList.printRec())
// Get
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log('5',singlyLinkedList.get(0).val) //
// console.log('10',singlyLinkedList.get(1).val) // 10
// console.log('15',singlyLinkedList.get(2).val) // 15
// console.log('20',singlyLinkedList.get(3).val) // 20
// console.log('null',singlyLinkedList.get(4)) // null
// singlyLinkedList.push(5); // singlyLinkedList
// console.log('1',singlyLinkedList.length); // 1
// console.log('5',singlyLinkedList.head.val); // 5
// console.log('5',singlyLinkedList.tail.val); // 5
// singlyLinkedList.push(10); // singlyLinkedList
// console.log("2",singlyLinkedList.length); // 2
// console.log("5",singlyLinkedList.head.val); // 5
// console.log("10",singlyLinkedList.head.next.val); // 10
// console.log("10",singlyLinkedList.tail.val); // 10
// singlyLinkedList.push(15); // singlyLinkedList
// console.log("3",singlyLinkedList.length); // 3
// console.log("5",singlyLinkedList.head.val); // 5
// console.log("10",singlyLinkedList.head.next.val); // 10
// console.log("15",singlyLinkedList.head.next.next.val); // 15
// console.log("15",singlyLinkedList.tail.val); // 15
// console.log("15",singlyLinkedList.pop().val); // 15
// console.log("10",singlyLinkedList.tail.val); // 10
// console.log("2",singlyLinkedList.length); // 2
// console.log("10",singlyLinkedList.pop().val); // 10
// console.log("1",singlyLinkedList.length); // 1
// console.log("5",singlyLinkedList.pop().val); // 5
// console.log("0",singlyLinkedList.length); // 0
// console.log("undefined",singlyLinkedList.pop()); // undefined
// console.log("0",singlyLinkedList.length); // 0
// shift
// singlyLinkedList.push(5).push(10).push(15).push(20);
// singlyLinkedList.shift();
// singlyLinkedList.unShift(25);
// console.log('shift',singlyLinkedList);
// insert 
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log('true',singlyLinkedList.insert(2,12)); // true
// console.log('false',singlyLinkedList.insert(100,12)); // false
// console.log('5',singlyLinkedList.length) // 5
// remove 
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log('15',singlyLinkedList.remove(2).val); // 15
// console.log('undefined',singlyLinkedList.remove(100)); // undefined
// console.log('3',singlyLinkedList.length) // 3