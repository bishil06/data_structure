const LinkedListNode = require('./linkedListNode.js');

class LinkedList {
    constructor(iter) {
        this.head = null;
        this.tail = null;
        this.cur = null;
        this.numOfNode = 0;
        this.compFn = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.numOfNode += 1;
            return this;
        }

        this.tail.setNext(newNode);
        this.tail = newNode;
        this.numOfNode += 1;
        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if (this.tail === null || this.head.getNext() === null ) {
            this.tail = newNode;
        }
        this.numOfNode += 1;
        return this;
    }

    first() {
        if (this.head === null) {
            return null;
        }

        this.cur = this.head;
        return this.cur.getValue();
    }

    next() {
        if (this.cur === null) {
            return this.cur;
        }

        this.cur = this.cur.getNext();
        if (this.cur === null) {
            return this.cur;
        }
        return this.cur.getValue();
    }

    *[Symbol.iterator]() {
        if (this.head === null) {
            return null;
        }
        let v = this.first();
        yield v;
        while (v = this.next()) {
            yield v;
        }
    }
}

module.exports = LinkedList;