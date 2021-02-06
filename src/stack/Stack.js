const LinkedList = require('../linked_list/linkedList.js');

class Stack {
    constructor() {
        this.llist = new LinkedList();
    }

    isEmpty() {
        return this.llist.isEmpty();
    }

    push(value) {
        this.llist.prepend(value);
        return this;
    }

    peek() {
        return this.llist.first();
    }

    pop() {
        let v = this.peek();
        if (v) {
            this.llist.deleteHead();
        }
        return v;
    }

    *[Symbol.iterator]() {
        let v = null;
        while (v = this.pop()) {
            yield v;
        }
    }
}

module.exports = Stack;