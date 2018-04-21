module.exports.PriorityQueue = function PriorityQueue() {
    const collection = [];

    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.print = print;

    function enqueue(item) {
        if (collection.length === 0) {
            collection.push(item);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (item[1] < collection[i][1]) {
                    collection.splice(i, 0, item);
                    added = true;
                    break;
                }
            }

            if (!added) {
                collection.push(item);
            }
        }
    }

    function dequeue() {
        const item = collection.shift();
        return item[0];
    }

    function print() {
        console.log(collection);
    }
};