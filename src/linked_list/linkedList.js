const LinkedListNode = require('./linkedListNode.js');

class LinkedList {
    constructor(iter) {
        this.head = null;
        this.tail = null;
        this.cur = null;
        this.numOfNode = 0;
        this.compFn = null;
    }
}

module.exports = LinkedList;