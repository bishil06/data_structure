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
});