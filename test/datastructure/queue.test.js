const { Queue, PriorityQueue } = require('../../lib/datastructure')

describe('imzhao.datastructure.queue', () => {
    test('create', () => {
        expect(new Queue().isEmpty()).toBeTruthy()
        expect(new Queue([1, 2, 3]).size()).toEqual(3)
    })

    test('values', () => {
        expect(new Queue([1, 2, 3]).values()).toEqual([1, 2, 3])
    })

    test('peek', () => {
        expect(new Queue().peek()).toBeUndefined()
        expect(new Queue([1, 2, 3]).peek()).toEqual(1)
    })

    test('enqueue', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.size()).toEqual(3)
        expect(queue.toString()).toEqual('1,2,3')
    })

    test('dequeue', () => {
        const queue = new Queue([1, 2, 3])
        expect(queue.dequeue()).toEqual(1)
        expect(queue.dequeue()).toEqual(2)
        expect(queue.dequeue()).toEqual(3)
        expect(queue.dequeue()).toEqual(undefined)
        expect(queue.size()).toEqual(0)
    })

    test('clear to empty', () => {
        const queue = new Queue([1, 2, 3])
        queue.clear()
        expect(queue.size()).toEqual(0)
        expect(queue.isEmpty()).toBeTruthy()
    })
})

describe('imzhao.datastructure.priorityQueue', () => {
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
        expect(priorityQueue.values()[1].element).toEqual(elementLow)
    })

    test('enqueue higher priority', () => {
        priorityQueue.enqueue(5, 5)
        expect(priorityQueue.toArray()).toEqual(['mid', 5, 'low'])
        priorityQueue.enqueue(elementHigh, priorityHigh)
        expect(priorityQueue.toString()).toEqual('high,mid,5,low')
        expect(priorityQueue.peek()).toEqual(elementHigh)
        expect(priorityQueue.dequeue()).toEqual(elementHigh)
    })

    test('clear to empty', () => {
        priorityQueue.clear()
        expect(priorityQueue.size()).toEqual(0)
        expect(priorityQueue.isEmpty()).toBeTruthy()
    })
})
