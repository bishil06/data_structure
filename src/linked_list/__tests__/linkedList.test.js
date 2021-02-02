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
        expect(llist.cur).toBe(llist.head);
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
        expect(llist.cur).toBe(llist.head);
        expect(llist.next()).toBe(20);
        expect(llist.cur).toBe(llist.head.getNext());
        expect(llist.next()).toBe(30);
        expect(llist.cur).toBe(llist.head.getNext().getNext());
        expect(llist.next()).toBe(40);
        expect(llist.cur).toBe(llist.head.getNext().getNext().getNext());
        expect(llist.cur).toBe(llist.tail);
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

    test('should iterable empty linked list', () => {
        const llist = new LinkedList();

        for(const v of llist) {
            throw new Error('error');
        }
    });

    test('should iterable linked list', () => {
        const llist = new LinkedList();

        for(let i=1; i<=3; i++) {
            llist.append(i*10);
        }

        let testValue = 10;
        for(const v of llist) {
            expect(v).toBe(testValue);
            testValue+=10;
        }
    });

    test('should init linked list from iterable', () => {
        const llist = new LinkedList([1, 2, 3, 4]);

        expect(llist.first()).toBe(1);
        expect(llist.next()).toBe(2);
        expect(llist.next()).toBe(3);
        expect(llist.next()).toBe(4);
    });

    test('should init linked list from not iterable', () => {
        expect(() => new LinkedList({1 : 'one', 2: 'two', 3: 'three'})).toThrow();
        expect(() => new LinkedList([1,2,3,4,5])).not.toThrow();
        let s = new Set([1, 1, 2, 3, 4]);
        expect(() => new LinkedList(s)).not.toThrow();
        let m = new Map([[1, 'one'], [2, 'tow'], [3, 'three']]);
        expect(() => new LinkedList(m)).not.toThrow();
    });

    test('should from linked list', () => {
        const llist = LinkedList.from([1,2,3,4,5]);

        expect(llist.first()).toBe(1);
        expect(llist.next()).toBe(2);
        expect(llist.next()).toBe(3);
        expect(llist.next()).toBe(4);
        expect(llist.next()).toBe(5);
    });

    test('should set compare function to linked list', () => {
        const llist = new LinkedList();
        let compareFunction = (a, b) => a===b;
        llist.setCompFn(compareFunction);
        expect(llist.compFn).toBe(compareFunction);
    });

    test('should delete empty linked list', () => {
        const llist = new LinkedList();
        expect(llist.delete()).toBeNull();
    });

    test('should delete linked list not set compare function', () => {
        const llist = new LinkedList();
        llist.append(1);
        expect(() => llist.delete(1)).toThrow();
        llist.setCompFn((a, b) => a === b);
        expect(() => llist.delete(1)).not.toThrow();
    });

    test('should one delete linked list ', () => {
        const llist = new LinkedList();
        llist.setCompFn((a, b) => a === b);
        
        llist.append(1);
        expect(llist.numOfNode).toBe(1);

        llist.delete(1);
        expect(llist.numOfNode).toBe(0);
        expect(llist.head).toBeNull();
        expect(llist.tail).toBeNull();
    });

    test('should delete linked list', () => {
        const llist = new LinkedList();
        for(let i=1; i<10; i++) {
            llist.append(i);
        }

        llist.delete(3, (a, b) => a===b);
        expect(llist.first()).toBe(1);
        expect(llist.next()).toBe(2);
        expect(llist.next()).toBe(4);
        expect(llist.next()).toBe(5);
        expect(llist.next()).toBe(6);
        expect(llist.next()).toBe(7);
        expect(llist.next()).toBe(8);
        expect(llist.next()).toBe(9);
        expect(llist.next()).toBeNull();
    });

    test('should delete linked list set compFn', () => {
        const llist = new LinkedList();
        llist.setCompFn((a, b) => a===b);

        for(let i=1; i<10; i++) {
            llist.append(i);
        }

        llist.delete(3);
        expect(llist.first()).toBe(1);
        expect(llist.next()).toBe(2);
        expect(llist.next()).toBe(4);
        expect(llist.next()).toBe(5);
    });

    test('should delete linked list oven', () => {
        const llist = new LinkedList();
        for(let i=1; i<10; i++) {
            llist.append(i);
        }

        llist.delete(2, (two, value) => (value%two === 0));
        llist.delete(2, (two, value) => (value%two === 0));
        llist.delete(2, (two, value) => (value%two === 0));
        llist.delete(2, (two, value) => (value%two === 0));

        expect(llist.first()).toBe(1);
        expect(llist.next()).toBe(3);
        expect(llist.next()).toBe(5);
        expect(llist.next()).toBe(7);
        expect(llist.next()).toBe(9);
    });

    test('should delete all linked list oven', () => {
        const llist = new LinkedList();
        llist.setCompFn((a, b) => a===b);

        for(let i=1; i<10; i++) {
            llist.append(i);
        }

        llist.deleteAll(2, (two, value) => (value%two === 0));

        expect(llist.first()).toBe(1);
        expect(llist.next()).toBe(3);
        expect(llist.next()).toBe(5);
        expect(llist.next()).toBe(7);
        expect(llist.next()).toBe(9);
    });

});