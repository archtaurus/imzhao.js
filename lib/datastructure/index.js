require('./set')
const { Queue, PriorityQueue } = require('./queue')

module.exports = {
    Stack: require('./stack'),
    Queue,
    PriorityQueue,
    LinkedList: require('./linkedlist'),
    BinaryTree: require('./binarytree'),
}
