class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(v) {
        this.list.push(v);
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let v = this.list.shift();
        return v;
    }

    peek() {
        if (this.list.length > 0) {
            return this.list[0];
        }
        else {
            return null;
        }
    }

    isEmpty() {
        if (this.list.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = Queue;