const Stack = require('./stack').Stack;
const Queue = require('./queue').Queue;
const PriorityQueue = require('./priority-queue').PriorityQueue;

// const stack = new Stack();

// stack.push('First');
// stack.push('Second');
// stack.push('Third');
//
// stack.print();
//
// console.log(stack.pop());
//
// stack.print();


// const queue = new Queue();
//
// queue.enqueue("First");
// queue.enqueue("Second");
// queue.enqueue("Third");
//
// queue.print();
//
// console.log(queue.dequeue());
//
// queue.print();


const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(['First', 2]);
priorityQueue.enqueue(['Second', 1]);
priorityQueue.enqueue(['Third', 3]);

priorityQueue.print();




