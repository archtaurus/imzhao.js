/**
 * 队列模块
 * @file queue.js
 * @author 赵鑫<7176466@qq.com>
 */

const LinkedList = require('./linkedlist')

/**
 * 队列
 */
class Queue {
    /**
     * 队列构造函数
     */
    constructor() {
        this.items = new LinkedList()
        this.enqueue = (item) => this.items.append(item)
        this.dequeue = () => this.items.shift()
        this.values = () => this.items.values()
        this.clear = () => this.items.clear()
    }

    get length() {
        return this.items.length
    }

    get isEmpty() {
        return this.items.length === 0
    }

    get head() {
        return this.items.first
    }

    get tail() {
        return this.items.last
    }
}

/**
 * 优先队列
 */
class PriorityQueue {
    constructor() {
        this.items = new LinkedList()
        this.clear = () => this.items.clear()
        this.enqueue = (element, priority) => {
            if (this.length === 0) return this.items.append({ element, priority })
            let node = this.items._head
            let i = 0
            while (node !== null && node.data.priority <= priority) {
                node = node.next
                i++
            }
            if (node === null) return this.items.append({ element, priority })
            else return this.items.insert(i, { element, priority })
        }
        this.dequeuemin = () => this.items.shift()?.element
        this.dequeuemax = () => this.items.pop()?.element
    }

    values() {
        const result = []
        for (const item of this.items) result.push(item.element)
        return result
    }

    get length() {
        return this.items.length
    }

    get isEmpty() {
        return this.items.length === 0
    }

    get min() {
        return this.items.first?.element
    }

    get max() {
        return this.items.last?.element
    }
}

// export for commonJS or browser
if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = { Queue, PriorityQueue }
else {
    window.Queue = Queue
    window.PriorityQueue = PriorityQueue
}
