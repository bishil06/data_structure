const Stack = require('../Stack.js');

describe('Stack', () => {
    test('should create empty stack', () => {
        const stack = new Stack();
        
        expect(stack).not.toBeNull();
        expect(stack.llist).toBeDefined();
        expect(stack.llist).not.toBeNull();
    });

    test('should isEmpty stack', () => {
        const stack = new Stack();

        expect(stack.isEmpty()).toBe(true);
    });

    test('should push stack', () => {
        const stack = new Stack();

        stack.push(10);
        expect(stack.isEmpty()).toBe(false);
    });

    test('should peek stack', () => {
        const stack = new Stack();

        stack.push(10);
        expect(stack.peek()).toBe(10);
        expect(stack.peek()).toBe(10);
        expect(stack.peek()).toBe(10);
    });

    test('should pop stack', () => {
        const stack = new Stack();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        expect(stack.pop()).toBe(30);
        expect(stack.pop()).toBe(20);
        expect(stack.pop()).toBe(10);
        expect(stack.pop()).toBeNull();
        expect(stack.pop()).toBeNull();
        expect(stack.pop()).toBeNull();
    });

    test('should push pop stack', () => {
        const stack = new Stack();

        stack.push(0);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toBe(0);
        expect(stack.pop()).toBe(0);
    });

    test('should iterate stack', () => {
        const stack = new Stack();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        let testValue = 40;
        for(const v of stack) {
            expect(v).toBe(testValue -= 10);
        }
    });
});