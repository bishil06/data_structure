const LinkedList = require('../linkedList.js');

describe('Linked List', () => {
    test('should create empty linked list', () => {
        const llist = new LinkedList();

        expect(llist.head).toBeNull();
        expect(llist.tail).toBeNull();
        expect(llist.cur).toBeNull();
        expect(llist.numOfNode).toBe(0);
        expect(llist.compFn).toBeNull();
    });

    test('should append empty linked list', () => {
        const llist = new LinkedList();
        llist.append(10);

        expect(llist.head.getValue()).toBe(10);
        expect(llist.tail.getValue()).toBe(10);
        expect(llist.cur).toBeNull();
        expect(llist.numOfNode).toBe(1);
        expect(llist.compFn).toBeNull();
    });

    test('should append linked list', () => {
        const llist = new LinkedList();
        llist.append(10);
        llist.append(20);
        llist.append(30);
        
        expect(llist.head.getValue()).toBe(10);
        expect(llist.head.getNext().getValue()).toBe(20);
        expect(llist.head.getNext().getNext().getValue()).toBe(30);
        expect(llist.tail.getValue()).toBe(30);
        expect(llist.cur).toBeNull();
        expect(llist.numOfNode).toBe(3);
        expect(llist.compFn).toBeNull();
    });

    test('should prepend empty linked list', () => {
        const llist = new LinkedList();
        llist.prepend(10);

        expect(llist.head.getValue()).toBe(10);
        expect(llist.tail.getValue()).toBe(10);
        expect(llist.cur).toBeNull();
        expect(llist.numOfNode).toBe(1);
        expect(llist.compFn).toBeNull();
    });

    test('should prepend inked list', () => {
        const llist = new LinkedList();
        llist.prepend(10);
        llist.prepend(20);
        llist.prepend(30);

        expect(llist.head.getValue()).toBe(30);
        expect(llist.head.getNext().getValue()).toBe(20);
        expect(llist.head.getNext().getNext().getValue()).toBe(10);
        expect(llist.tail.getValue()).toBe(10);
        expect(llist.cur).toBeNull();
        expect(llist.numOfNode).toBe(3);
        expect(llist.compFn).toBeNull();
    });
});