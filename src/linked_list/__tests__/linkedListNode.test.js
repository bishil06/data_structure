const LinkedListNode = require('../linkedListNode.js');

describe('Linked List Node', () => {
    test('should create empty Linked List Node', () => {
        const node = new LinkedListNode();

        expect(node.value).toBeNull();
        expect(node.nextNode).toBeNull();
    });

    test('should create Linked List Node with value', () => {
        const v = 1;
        const node = new LinkedListNode(v);

        expect(node.value).toBe(v);
        expect(node.nextNode).toBeNull();
    });

    test('should create Linked List Node with value, nextNode', () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2, node1);
        
        expect(node1.value).toBe(1);
        expect(node1.nextNode).toBeNull();

        expect(node2.value).toBe(2);
        expect(node2.nextNode.value).toBe(1);
        expect(node2.nextNode.nextNode).toBeNull();
    });

    test('should set value Node', () => {
        const node = new LinkedListNode(1);

        expect(node.value).toBe(1);
        node.setValue(10);
        expect(node.value).toBe(10);
    });

    test('should get value Node', () => {
        const node = new LinkedListNode(1);

        expect(node.getValue()).toBe(1);
    });

    test('should set next node', () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2);
        const node3 = new LinkedListNode(3);

        node1.setNext(node2);
        expect(node1.nextNode.getValue()).toBe(2);
        node1.setNext(node3);
        expect(node1.nextNode.getValue()).toBe(3);
    });

    test('should get next node', () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2);
        const node3 = new LinkedListNode(3);

        node1.setNext(node2);
        expect(node1.getNext().getValue()).toBe(2);
        node1.setNext(node3);
        expect(node1.getNext().getValue()).toBe(3);
    });

    test('should iterate node', () => {
        const node1 = new LinkedListNode(1);
        const node2 = new LinkedListNode(2);
        const node3 = new LinkedListNode(3);

        node1.setNext(node2);
        node2.setNext(node3);
        
        expect(node1.getValue()).toBe(1);
        expect(node1.getNext().getValue()).toBe(2);
        expect(node1.getNext().getNext().getValue()).toBe(3);
    });

    test('should set null linked list node', () => {
        const node = new LinkedListNode(1);
        expect(node.getValue()).toBe(1);
        expect(node.getNext()).toBeNull();

        node.setNull()
        expect(node.getValue()).toBeNull();
        expect(node.getNext()).toBeNull();
    });
});