const { Queue } = require('../datastructure/queue')
module.exports = function 击鼓传花(list, number) {
    const q = new Queue(list)
    while (q.size() > 1) {
        for (let i = 0; i < number - 1; i++) q.enqueue(q.dequeue())
        q.dequeue()
    }
    return q.peek() // lastone is the winner 😉
}
