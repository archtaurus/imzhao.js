/**
 * 数据结构模块
 * @author 赵鑫<7176466@qq.com>
 */

require('./array')
require('./set')
const { Queue, PriorityQueue } = require('./queue')

module.exports = {
    Stack: require('./stack'),
    Queue,
    PriorityQueue,
    LinkedList: require('./linkedlist'),
    BinarySearchTree: require('./binarytree'),
}
