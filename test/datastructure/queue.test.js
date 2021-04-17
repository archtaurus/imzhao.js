const imzhao = require('imzhao')

describe('imzhao.datastructure.queue', () => {
    const { Queue } = imzhao.datastructure
    const list = [1, 2, 3]
    const item = 4
    const queue = new Queue(list)

    test('create', () => {
        expect(new Queue().size()).toEqual(0)
        expect(queue.size()).toEqual(list.length)
        expect(queue.isEmpty()).toBeFalsy()
    })

    test('items', () => {
        expect(queue.items().toString()).toBe(list.toString())
    })

    test('peek', () => {
        expect(queue.peek()).toEqual(list[0])
    })

    test('enqueue', () => {
        queue.enqueue(item)
        expect(queue.size()).toEqual(list.length + 1)
    })

    test('dequeue', () => {
        const size = queue.size()
        expect(queue.dequeue()).toEqual(list[0])
        expect(queue.size()).toEqual(size - 1)
    })

    test('clear to empty', () => {
        queue.clear()
        expect(queue.size()).toEqual(0)
        expect(queue.isEmpty()).toBeTruthy()
    })
})

describe('imzhao.datastructure.priorityQueue', () => {
    const { PriorityQueue } = imzhao.datastructure
    const priorityQueue = new PriorityQueue()
    const elementLow = 'low'
    const priorityLow = 1
    const elementMid = 'mid'
    const priorityMid = 10
    const elementHigh = 'high'
    const priorityHigh = 100

    test('enqueue', () => {
        priorityQueue.enqueue(elementMid, priorityMid)
        expect(priorityQueue.size()).toEqual(1)
    })

    test('enqueue lower priority', () => {
        priorityQueue.enqueue(elementLow, priorityLow)
        expect(priorityQueue.items()[1].element).toEqual(elementLow)
    })

    test('enqueue higher priority', () => {
        priorityQueue.enqueue(elementHigh, priorityHigh)
        expect(priorityQueue.peek()).toEqual(elementHigh)
        expect(priorityQueue.dequeue()).toEqual(elementHigh)
    })

    test('clear to empty', () => {
        priorityQueue.clear()
        expect(priorityQueue.size()).toEqual(0)
        expect(priorityQueue.isEmpty()).toBeTruthy()
    })
})
