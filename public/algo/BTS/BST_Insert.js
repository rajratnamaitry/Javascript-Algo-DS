/**
 * Binary Search Tree - insert Exercise
 * 
 * Write a function on the BinarySearchTree class
 * 
 * insert - accepts a value and inserts it into the BST in the correct position. The function should return the binary search tree. 
 * 0
 */
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
binarySearchTree.root.value // 15
binarySearchTree.root.right.value // 20
binarySearchTree.root.left.right.value // 12