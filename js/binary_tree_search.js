"use strict";

console.log("========================================");

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left); //recursive
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right); //recursive
          }
        } else {
          // if this point, then data is equal to left or right
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
      return current;
    }
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false; //not in tree
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        //CHECK IF EMPTY TREE
        return null;
      }
      if (data == node.data) {
        //if we found node with the data
        //node has no children
        if (node.left == null && node.right == null) {
          return null;
        }

        //node has no left child
        if (node.left == null) {
          return node.right;
        }

        //node has no right child
        if (node.right == null) {
          return node.left;
        }

        //node has 2 children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}
console.log("=========================================");
console.log("new binary search tree");
const bts = new BTS();
//new binary search tree

bts.add(4);
bts.add(2);
bts.add(6);
bts.add(1);
bts.add(3);
bts.add(5);
bts.add(7);
bts.remove(4);
console.log(bts.findMin());
console.log(bts.findMax());
bts.remove(7);
console.log(bts.isPresent(4));

bts.add(9);
bts.add(4);
bts.add(17);
bts.add(3);
bts.add(6);
bts.add(22);
bts.add(5);
bts.add(7);
bts.add(20);

console.log(bts.findMinHeight());
console.log(bts.findMaxHeight());
console.log(bts.isBalanced());
bts.add(10);
console.log(bts.findMinHeight());
console.log(bts.findMaxHeight());
console.log(bts.isBalanced());

//traversal
console.log("inOrder: " + bts.inOrder());
console.log("preOrder: " + bts.preOrder());
console.log("postOrder: " + bts.postOrder());

console.log("levelOrder: " + bts.levelOrder());
