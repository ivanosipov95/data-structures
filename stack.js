module.exports.Stack = function Stack() {
    let storage = {};
    let count = 0;

    this.push = push;
    this.pop = pop;
    this.print = print;

    function push(item) {
        count++;
        storage[count] = item;
    }

    function pop() {
        if (count > 0) {
            const item = storage[count];
            delete storage[count];
            count--;

            return item;
        }
    }

    function print() {
        console.log(storage);
        for (let i = count; i > 0; i--) {
            console.log(`Item: ${storage[i]}`);
        }
    }
};