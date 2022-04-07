const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
        console.log(element + ' pushed');
    }

    pop() {

        let stackLength = this.stack.length;

        if (stackLength != 0) {
            console.log(this.stack[stackLength - 1] + ' popped');
            return this.stack.pop();
        } else return undefined;
    }

    peek() {

        let stackLength = this.stack.length;

        if (stackLength != 0) {
            console.log(this.stack[stackLength - 1] + ' picked');
            return this.stack[stackLength - 1];
        }
    }
}

module.exports = {
    Stack
};

// const stack = new Stack();

// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.peek(); //7
// stack.pop(); //7
// stack.peek(); //6