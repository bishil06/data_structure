const LinkedListNode = require('../linkedListNode.js');

describe('Linked List Node', () => {
    test('should create empty Linked List', () => {
        const node = new LinkedListNode();

        expect(node.value).toBeNull();
        expect(node.nextNode).toBeNull();
    });

    test('should create Linked List with value', () => {
        const v = 1;
        const node = new LinkedListNode(v);

        expect(node.value).toBe(v);
        expect(node.nextNode).toBeNull();
    });

    test('should create Linked List with value, nextNode', () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2, node1);
        
        expect(node1.value).toBe(1);
        expect(node1.nextNode).toBeNull();
        
        expect(node2.value).toBe(2);
        expect(node2.nextNode.value).toBe(1);
        expect(node2.nextNode.nextNode).toBeNull();
    });
});