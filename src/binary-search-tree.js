"use strict"

const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor(data) {
        this.tree = null;
    }

    root() {
        return this.tree;
    }

    add(data) {

        this.tree = addMethod(data, this.tree);

        function addMethod(data, node) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addMethod(data, node.left)
            } else {
                node.right = addMethod(data, node.right)
            }

            return node;
        }
    }

    has(data) {
        return hasData(data, this.tree);

        function hasData(data, node) {
            if (!node) {
                return false
            }

            if (node.data === data) {
                return true
            }

            if (data < node.data) {
                return hasData(data, node.left);
            } else {
                return hasData(data, node.right);
            }
        }
    }

    find(data) {

        return findData(data, this.tree);

        function findData(data, node) {
            if (!node) {
                return null
            }

            if (node.data === data) {
                return node
            }

            if (data < node.data) {
                return findData(data, node.left);
            } else {
                return findData(data, node.right);
            }
        }

    }

    remove(data) {
        this.tree = removeData(data, this.tree);

        function removeData(data, node) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeData(data, node.left);
                return node;
            } else if (data > node.data) {
                node.right = removeData(data, node.right)
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }

                node.data = minFromRight.data;

                node.right = removeData(minFromRight.data, node.right)

                return node;
            }

        }
    }

    min() {
        if (!this.tree) {
            return;
        }
        let node = this.tree;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.tree) {
            return;
        }

        let node = this.tree;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};

let tree = new BinarySearchTree;

// tree.add(1);
// console.log(tree.root().data);

// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);

// console.log(
//     '\n', tree.find(8),
//     '\n', tree.find(2),
//     '\n', tree.find(32),
//     '\n', tree.find(14),
//     '\n', tree.find(30),
//     '\n', tree.find(10), )

// console.log(tree.find(8));
// console.log(tree.find(14));