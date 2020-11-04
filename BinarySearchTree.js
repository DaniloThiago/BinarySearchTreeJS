class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  hasLeft() {
    return this.left != null;
  }

  hasRight() {
    return this.right != null;
  }

  getValue() {
    return this.value;
  }
}

class BinarySearchTree {
  construct() {
    this.root = null;
  }

  add(value) {
    if(this.root == null) {
      this.root = new Node(value);
    } else {
      let node = this.getNode(this.root, value);
      if(node.value != value) {
        let newNode = new Node(value);
        if(value < node.value) {
          node.left = newNode;
        } else {
          node.right = newNode;
        }
      }
    }
  }

  getNode(node, value) {
    if(value == node.value) {
      return node;
    } else {
      if(value < node.value) {
        if(node.hasLeft()) {
          return this.getNode(node.left, value);
        } else {
          return node;
        }
      } else {
        if(node.hasRight()) {
          return getNode(node.right, value);
        } else {
          return node;
        }
      }
    }
  }

}

var t = new BinarySearchTree();
t.add(5);
t.add(2);
t.add(6);
t.add(4);
console.log(JSON.stringify(t, null, 2))
