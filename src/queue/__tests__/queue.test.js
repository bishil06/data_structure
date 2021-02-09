const { TestScheduler } = require('jest');
const Queue = require('../queue.js');

describe('Queue', () => {
    test('should create empty queue', () => {
        const Q = new Queue();

        expect(Q).not.toBeNull();
        expect(Q.list).toBeDefined();
        expect(Q.list.length).toBe(0);
    });
    
    test('should peek empty queue', () => {
        const Q = new Queue();

        expect(Q.peek()).toBeNull();
    });

    test('should peek queue', () => {
        const Q = new Queue();
        Q.enqueue(1);
        Q.enqueue(2);
        Q.enqueue(3);
        expect(Q.peek()).toBe(1);
        expect(Q.peek()).toBe(1);
        expect(Q.peek()).toBe(1);
    });

    test('should enqueue queue', () => {
        const Q = new Queue();
        Q.enqueue(1);
        expect(Q.list[0]).toBe(1);
    });

    test('should dequeue queue', () => {
        const Q = new Queue();
        expect(Q.dequeue()).toBeNull();
    });

    test('should isEmpty queue', () => {
        const Q = new Queue();
        expect(Q.isEmpty()).toBe(true);
        Q.enqueue(1);
        expect(Q.isEmpty()).toBe(false);
        expect(Q.dequeue()).toBe(1);
        expect(Q.isEmpty()).toBe(true);
    });

    test('should dequeue from queue in FIFO order', () => {
        const Q = new Queue();

        Q.enqueue(1);
        Q.enqueue(2);

        expect(Q.dequeue()).toBe(1);
        expect(Q.dequeue()).toBe(2);
        expect(Q.dequeue()).toBeNull();
        expect(Q.isEmpty()).toBe(true);
    });

    test('should peek queue', () => {
        const Q = new Queue();
        expect(Q.peek()).toBeNull();
        Q.enqueue(10);
        expect(Q.peek()).toBe(10);
        Q.enqueue(20);
        expect(Q.peek()).toBe(10);
        Q.dequeue();
        expect(Q.peek()).toBe(20);
        Q.dequeue();
        expect(Q.peek()).toBeNull();
    });
});