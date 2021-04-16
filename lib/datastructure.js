const Stack = function (list) {
    let items = list || []
    this.items = () => items
    this.peek = () => items[items.length - 1]
    this.push = (item) => items.push(item)
    this.pop = () => items.pop()
    this.size = () => items.length
    this.clear = () => (items = [])
    this.isEmpty = () => items.length < 1
}

const Queue = function (list) {
    let items = list || []
    this.items = () => items
    this.peek = () => items[0]
    this.enqueue = (item) => items.push(item)
    this.dequeue = () => items.shift()
    this.size = () => items.length
    this.clear = () => (items = [])
    this.isEmpty = () => items.length < 1
}

const PriorityQueue = function (list) {
    let items = list || []
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

const LinkedList = function () {
    const Node = function (element) {
        this.element = element
        this.next = null
    }
    let head = null
    let tail = null
    let length = 0
    this.length = () => length
    this.head = () => head
    this.tail = () => tail
    this.append = (element) => {
        const node = new Node(element)
        if (head === null) {
            head = node
            tail = node
        } else {
            tail.next = node
            tail = node
        }
        length++
    }
    this.insert = (index, element) => {
        if (index < 0 || length < index) return
        const node = new Node(element)
        if (index === 0) {
            node.next = head
            head = node
        } else if (index === length) {
            tail.next = node
            tail = node
        } else {
            let current = head
            for (let i = 1; i < index; i++) current = current.next
            node.next = current.next
            current.next = node
        }
        length++
    }
    this.indexOf = (element) => {
        for (let current = head, i = 0; current && i < length; i++) {
            if (current.element == element) return i
            current = current.next
        }
        return -1
    }
    this.remove = (element) => this.removeAt(this.indexOf(element))
    this.removeAt = (index) => {
        if (index < 0 || length <= index) return
        if (index === 0) {
            head = head.next
        } else {
            let previous = head
            for (let i = 1; i < index; i++) previous = previous.next
            previous.next = previous.next.next
            if (previous.next === null) tail = previous
        }
        length--
    }
}

function 击鼓传花(list, number) {
    const q = new Queue(list)
    while (q.size() > 1) {
        for (let i = 0; i < number - 1; i++) q.enqueue(q.dequeue())
        q.dequeue()
    }
    return q.peek() // lastone is the winner 😉
}
