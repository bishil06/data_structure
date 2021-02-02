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

    test('should prepend linked list', () => {
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

    test('should append, prepend linked list', () => {
        const llist = new LinkedList();
        llist.prepend(10);
        llist.append(20);
        llist.prepend(30);
        llist.append(40);
        llist.prepend(50);

        expect(llist.head.getValue()).toBe(50);
        expect(llist.tail.getValue()).toBe(40);
        expect(llist.head.getNext().getValue()).toBe(30);
        expect(llist.head.getNext().getNext().getValue()).toBe(10);
        expect(llist.head.getNext().getNext().getNext().getValue()).toBe(20);
    });

    test('should first empty linked list', () => {
        const llist = new LinkedList();
        
        expect(llist.first()).toBeNull();  
    });

    test('should first linked list 1', () => {
        const llist = new LinkedList();
        llist.append(10);
        expect(llist.first()).toBe(10);
    });

    test('should first linked list 2', () => {
        const llist = new LinkedList();
        llist.append(10);
        llist.append(20);
        llist.append(30);
        expect(llist.first()).toBe(10);
    });

    test('should first linked list 3', () => {
        const llist = new LinkedList();
        llist.append(10);
        llist.append(20);
        llist.append(30);
        llist.prepend(40);
        expect(llist.first()).toBe(40);
    });

    test('should next empty linked list', () => {
        const llist = new LinkedList();
        expect(llist.next()).toBeNull();
    });

    test('should next linked list', () => {
        const llist = new LinkedList();
        llist.append(10);
        llist.append(20);
        llist.append(30);
        llist.append(40);

        expect(llist.first()).toBe(10);
        expect(llist.next()).toBe(20);
        expect(llist.next()).toBe(30);
        expect(llist.next()).toBe(40);
        expect(llist.next()).toBeNull();
        expect(llist.next()).toBeNull();
        expect(llist.next()).toBeNull();
        expect(llist.next()).toBeNull();
    });

    test('should while loop linked list', () => {
        const llist = new LinkedList();
        llist.append(10);
        llist.append(20);
        llist.append(30);
        llist.append(40);

        let testValue = 10;
        let v = llist.first();
        expect(v).toBe(testValue);

        while (v = llist.next()) {
            testValue += 10;
            expect(v).toBe(testValue);
        }
    });
});