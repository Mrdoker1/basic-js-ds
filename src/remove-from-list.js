const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function createList(arr) {

    let currentNode;
    let head;

    for (let i = 0; i < arr.length; i++) {

        if (currentNode) {
            let node = new ListNode;
            node.value = arr[i];
            currentNode.next = node;
            currentNode = node;
        } else {
            let node = new ListNode;
            node.value = arr[i];
            currentNode = node;
            if (!head) {
                head = node;
            }
        }
    }

    return head;
}

function printList(head) {

    let selectedNode = head;

    do {
        console.log(`current = ${selectedNode.value} next = ${selectedNode.next ? selectedNode.next.value : null}`)
        selectedNode = selectedNode.next;
    }
    while (selectedNode)

}

function nodeToArr(head) {

    let selectedNode = head;
    let result = [];

    do {
        result.push(selectedNode.value);
        selectedNode = selectedNode.next;
    }
    while (selectedNode)

    return result;
}

function removeKFromList(list, num) {

    let head = list;
    let selectedNode = list;
    let prevNode = list;

    do {
        if (selectedNode.value === num) {
            if (prevNode == selectedNode) {
                head = selectedNode.next;
            } else {
                prevNode.next = selectedNode.next;
            }
        } else {
            prevNode = selectedNode;
        }
        selectedNode = selectedNode.next;
    }
    while (selectedNode)

    return head;

}

module.exports = {
    removeKFromList
};

// removeKFromList([3, 1, 2, 3, 3, 4, 5, 3], 5)