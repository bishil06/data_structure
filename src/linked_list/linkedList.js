const LinkedListNode = require('./linkedListNode.js');

class LinkedList {
    constructor(iter) {
        this.head = null;
        this.tail = null;
        this.cur = null;
        this.numOfNode = 0;
        this.compFn = null;

        if (iter) {
            if (iter[Symbol.iterator]) {
                for(const v of iter) {
                    this.append(v);
                }
            }
            else {
                throw new TypeError('is not iterable');
            }
        }
    }

    isEmpty() {
        return this.head === null;
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

    setCompFn(compFn) {
        this.compFn = compFn;
    }

    delete(value, compFn) {
        if (this.head === null) {
            return null;
        }

        if (!compFn) {
            compFn = this.compFn;
            if (!compFn) {
                throw new Error('not set compare function');
            }
        }

        let deleteNode = null;
        let prevDeleteNode = null;
        
        this.cur = this.head;
        let v = this.cur.getValue();

        if (compFn(value, v) ===  true) {
            deleteNode = this.cur;
            this.head = deleteNode.getNext();
            if (this.head === null) {
                this.tail = null;
            }
            deleteNode.setNull();
            this.numOfNode -= 1;
            return this;
        }

        while ( v !== null) {
            prevDeleteNode = this.cur;
            this.cur = this.cur.getNext();
            if (this.cur === null) {
                return null;
            }

            v = this.cur.getValue();
            if (compFn(value, v) === true) {
                deleteNode = this.cur;
                prevDeleteNode.setNext(deleteNode.getNext());
                if (prevDeleteNode.getNext() === null) {
                    this.tail = null;
                }
                deleteNode.setNull();
                this.numOfNode -= 1;
                return this;
            }
        }
    }

    deleteHead() {
        if (this.head === null) {
            return null;
        }

        let deleteNode = null;

        if (this.head.getNext() === null) {
            deleteNode = this.head;
            deleteNode.setNull();
            this.head = null;
            this.tail = null;
            this.numOfNode -= 1;
            return this;
        }
        else {
            deleteNode = this.head;
            this.head = this.head.getNext();
            deleteNode.setNull();
            this.numOfNode -= 1;
            return this;
        }
    }

    deleteAll(value, compFn) {
        while(this.delete(value, compFn) !== null) {}
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

    static from(iter) {
        const llist = new LinkedList();
        for(const v of iter) {
            llist.append(v);
        }
        return llist;
    }
}

module.exports = LinkedList;