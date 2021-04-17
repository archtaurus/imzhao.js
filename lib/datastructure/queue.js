const Queue = function (list) {
    let items = [...(list || [])]
    this.items = () => items
    this.peek = () => items[0]
    this.enqueue = (item) => items.push(item)
    this.dequeue = () => items.shift()
    this.size = () => items.length
    this.clear = () => (items = [])
    this.isEmpty = () => items.length < 1
}

const PriorityQueue = function (list) {
    let items = [...(list || [])]
    this.items = () => items
    this.peek = () => items[0].element
    this.enqueue = (element, priority) => {
        let i = 0
        for (; i < items.length; i++) {
            if (priority > items[i].priority) break
        }
        items.splice(i, 0, { element, priority })
    }
    this.dequeue = () => items.shift().element
    this.size = () => items.length
    this.clear = () => (items = [])
    this.isEmpty = () => items.length < 1
}

module.exports = { Queue, PriorityQueue }
