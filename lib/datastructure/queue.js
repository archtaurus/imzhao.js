/**
 * 队列模块
 * @file queue.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 队列类
 */
class Queue {
    constructor(list) {
        this.items = [...(list || [])]
        this.values = () => this.items
        this.peek = () => (this.isEmpty() ? undefined : this.items[0])
        this.enqueue = (item) => this.items.push(item)
        this.dequeue = () => this.items.shift()
        this.size = () => this.items.length
        this.clear = () => (this.items = [])
        this.isEmpty = () => this.items.length < 1
        this.toString = () => this.items.toString()
        this.toArray = () => [...this.items]
    }
}

/**
 * 优先队列类
 */
class PriorityQueue {
    constructor(list) {
        let items = [...(list || [])]
        this.values = () => items
        this.peek = () => (this.isEmpty() ? undefined : items[0].element)
        this.enqueue = (element, priority) => {
            let i = 0
            for (; i < items.length; i++) {
                if (priority > items[i].priority) break
            }
            items.splice(i, 0, { element, priority })
        }
        this.dequeue = () => (this.isEmpty() ? undefined : items.shift().element)
        this.size = () => items.length
        this.clear = () => (items = [])
        this.isEmpty = () => items.length < 1
        this.toString = () => this.toArray().toString()
        this.toArray = () => {
            const list = []
            for (let i of items) list.push(i.element)
            return list
        }
    }
}

// export for commonJS or browser
if (typeof module && typeof module.exports) module.exports = { Queue, PriorityQueue }
else {
    window.Queue = Queue
    window.PriorityQueue = PriorityQueue
}
