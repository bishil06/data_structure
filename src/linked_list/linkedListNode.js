class LinkedListNode {
    constructor(value, nextNode) {
        this.value = value ? value : null;
        this.nextNode = nextNode ? nextNode : null;
    }

    setValue(value) {
        this.value = value;
    }

    getValue(value) {
        return this.value;
    }

    setNext(node) {
        this.nextNode = node;
    }

    getNext(node) {
        return this.nextNode;
    }
}

module.exports = LinkedListNode;