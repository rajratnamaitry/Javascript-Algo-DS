/**
 * Binary Search Tree - DFS Exercise
 * 
 * Implement the following functions on the BinarySearchTree.prototype. insert has been implemented for you to help with testing.
 * 
 * DFSPreOrder
 * 
 * This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.
 * 
 * var binarySearchTree = new BinarySearchTree();
 * binarySearchTree
 *     .insert(15)
 *     .insert(20)
 *     .insert(10)
 *     .insert(12)
 *     .insert(1)
 *     .insert(5)
 *     .insert(50);
 * binarySearchTree.DFSPreOrder() // [15, 10, 1, 5, 12, 20, 50]
 * 
 * DFSInOrder
 * 
 * This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.
 * 
 * var binarySearchTree = new BinarySearchTree();
 * binarySearchTree
 *     .insert(15)
 *     .insert(20)
 *     .insert(10)
 *     .insert(12)
 *     .insert(1)
 *     .insert(5)
 *     .insert(50);
 * binarySearchTree.DFSInOrder() // [1, 5, 10, 12, 15, 20, 50]
 * 
 * DFSPostOrder
 * 
 * This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.
 * 
 * var binarySearchTree = new BinarySearchTree();
 * binarySearchTree
 *     .insert(15)
 *     .insert(20)
 *     .insert(10)
 *     .insert(12)
 *     .insert(1)
 *     .insert(5)
 *     .insert(50);
 * binarySearchTree.DFSPostOrder() // [5, 1, 12, 10, 50, 20, 15]
 *         if (value < current.value) {
 *           if (current.left === null) {
 *             current.left = new Node(value);
 *             return this;
 *           } else {
 *             current = current.left;
 *           }
 *         } else if (value > current.value) {
 *           if (current.right === null) {

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