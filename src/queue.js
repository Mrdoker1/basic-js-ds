const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

    constructor() {
        this.queue;
    }

    printList(head = this.queue) {

        let selectedNode = head;

        do {
            console.log(`current = ${selectedNode.value} next = ${selectedNode.next ? selectedNode.next.value : null}`)
            selectedNode = selectedNode.next;
        }
        while (selectedNode)

    }

    getUnderlyingList() {
        return this.queue;
    }

    getLast() {

        let selectedNode = this.queue
        let head = this.queue

        while (selectedNode) {

            if (selectedNode) {
                head = selectedNode;
            }
            selectedNode = selectedNode.next;
        }

        return head;
    }

    enqueue(value) {

        let lastNode = this.getLast();
        let newNode = new ListNode;
        newNode.value = value;

        if (lastNode) {
            lastNode.next = newNode
        } else {
            this.queue = newNode;
        }
    }

    dequeue() {
        let deletedItem = this.queue.value;
        this.queue = this.queue.next;
        return deletedItem;
    }
}

module.exports = {
    Queue
};

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.printList();

// console.log(queue.getUnderlyingList())

// console.log(queue.dequeue())
// queue.printList();