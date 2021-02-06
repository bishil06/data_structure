const Stack = require('./Stack.js');

const operators = {
    '(': 0,
    ')': 0,
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
}
const op = new Map(Object.entries(operators));

function *filter(fn, iter) {
    for(const v of iter) if (fn(v)) yield v;
}

function *convToPRNExp(expression) {
    const stack = new Stack();
    let numStr = '';

    for(const c of filter(c => (c !== ' '), expression)) {
        if (op.has(c)) {
            // operator process
            if (numStr !== '') yield Number(numStr);
            numStr = '';

            if (!stack.isEmpty() && op.get(stack.peek()) > op.get(c)) {
                yield* filter(op => (op !=='(' && op !== ')'), stack);
                stack.push(c);
            }
            else {
                stack.push(c);
            }
        }
        else {
            // number process
            numStr += c;
        }
    }
    if (numStr !== '') yield Number(numStr);

    yield* filter(op => (op !=='(' && op !== ')'), stack);
}


function stackCalculator(expression) {
    let stack = new Stack();

    for(const e of convToPRNExp(expression)) {
        if (op.has(e)) {
            let a = stack.pop();
            let b = stack.pop();
            switch(e) {
                case '+':
                    stack.push(b+a);
                    break;
                case '-':
                    stack.push(b-a);
                    break;
                case '*':
                    stack.push(b*a);
                    break;
                case '/':
                    stack.push(b/a);
                    break;
            }
        }
        else {
            console.log('test', e);
            stack.push(e)
        }
        // console.log(e);
    }
    
    return stack.pop();
}

console.log(stackCalculator('0'));
console.log(stackCalculator('1'));
// console.log(stackCalculator('1+2'));
// console.log(stackCalculator('(1+2)*2'));
// console.log(stackCalculator('(1+2*3)+2'));
// console.log(stackCalculator('(1+2*50)+10'));