class Node {
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(current.val > val){
                if(current.left ==null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else {
                if(current.right == null){
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
    find(val){
        if(!this.root) return null;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(current.val > val){
                current = current.left;
            }else if(current.val < val){
                current = current.right;
            }else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    Bfs(){
        if(!this.root) return null;
        let queue = [this.root];
        let values = [];
        while(queue.length > 0){
            const current = queue.shift();
            values.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return values;
    }
    Dfs(){
        if(!this.root) return null;
        let stack = [ this.root ];
        const values = []
        while(stack.length > 0){
            const current = stack.pop();
            values.push(current.val);
            if(current.right) stack.push(current.right)
            if(current.left) stack.push(current.left)
        }
        return values;
    }
    dfsRec(root = this.root){
        if(root == null) return [];
        let left = this.dfsRec(root.left);
        let right = this.dfsRec(root.right);
        return [root.val,...left,...right];
    }
    treeIncludesRec(root = this.root, target){
        if(root == null) return false;
        if(root.val == target) return true;
        return this.treeIncludesRec(root.left,target) || this.treeIncludesRec(root.right,target);
    }
    treeSum(root= this.root){
        if(root == null) return 0;
        return root.val + this.treeSum(root.left) + this.treeSum(root.right)
    }
    treeMinValue(){
        if(!this.root) return null;
        const stack = [ this.root ];
        let min = Infinity;
        while(stack.length > 0){
            const current = stack.pop();
            min = ( min > current.val)?current.val : min;
            if(current.left) stack.push(current.left);
            if(current.right) stack.push(current.right);
        }
        return min;
    }
    maxPath(root = this.root){
        if(root.left == null && root.right == null) return root.val;
        const max = Math.max(this.maxPath(root.left),this.maxPath(root.right));
        return root.val + max;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

//      10
//   5     13
// 2  7  11  16

// var tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// console.log('find',tree.find(2))
// console.log('bfs',tree.Bfs())
// console.log('Dfs',tree.Dfs())
// console.log('Dfs recursie',tree.dfsRec())
// console.log('treeIncludesRec',tree.treeIncludesRec(tree.root,11)) // true
// console.log('treeSum',tree.treeSum()) // 64
// console.log('treeMinValue',tree.treeMinValue()) //2
// console.log('maxPath',tree.maxPath()) // 39
// //      10
// //   5     13
// // 2  7  11  16

// console.log("DFSPreOrder",tree.DFSPreOrder());   // DFSPreOrder (7) [10, 5, 2, 7, 13, 11, 16]
// console.log("DFSPostOrder",tree.DFSPostOrder()); // DFSPostOrder (7) [2, 7, 5, 11, 16, 13, 10]
// console.log("DFSInOrder",tree.DFSInOrder());     // DFSInOrder (7) [2, 5, 7, 10, 11, 13, 16]
module.exports.BinarySearchTree = BinarySearchTree;