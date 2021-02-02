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

    test('should append linked list', () => {
        const llist = new LinkedList();
        llist.append(10);

        expect(llist.head.getValue()).toBe(10);
        expect(llist.tail.getValue()).toBe(10);
        expect(llist.numOfNode).toBe(1);
        expect(llist.compFn).toBeNull();
    });
});