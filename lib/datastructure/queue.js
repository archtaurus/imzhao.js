/**
 * 队列模块
 * @file queue.js
 * @author 赵鑫<7176466@qq.com>
 */

const LinkedList = require('./linkedlist')

/**
 * 队列类
 */
class Queue {
    /**
     * 构造函数
     */
    constructor() {
        this.items = new LinkedList()
        this.enqueue = (item) => this.items.append(item)
        this.dequeue = () => this.items.remove(0)
        this.values = () => this.items.values()
        this.clear = () => this.items.clear()
    }

    get length() {
        return this.items.length
    }

    get head() {
        return this.items.first
    }

    get tail() {
        return this.items.last
    }

    get isEmpty() {
        return this.items.length === 0
    }
}

/**
 * 优先队列类
 */
class PriorityQueue extends Queue {
    constructor(compare) {
        super()
        this.enqueue = (element, priority) => {
            let i = 0
            for (; i < this.items.length; i++) {
                if (priority > this.items[i].priority) break
            }
            this.items.splice(i, 0, { element, priority })
        }
    }
}

// export for commonJS or browser
if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = { Queue, PriorityQueue }
else {
    window.Queue = Queue
    window.PriorityQueue = PriorityQueue
}
