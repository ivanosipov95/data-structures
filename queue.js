module.exports.Queue = function Queue() {
    const collection = [];

    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.print = print;

    function enqueue(item) {
        collection.push(item);
    }

    function dequeue() {
        return collection.shift();
    }

    function print() {
        console.log(collection);
    }
};