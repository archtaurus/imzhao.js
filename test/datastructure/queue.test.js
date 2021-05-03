const { Queue, PriorityQueue } = require('../../lib/datastructure')

describe('imzhao.datastructure.queue', () => {
    const queue = new Queue()
    test('create', () => {
        expect(queue.length).toEqual(0)
        expect(queue.head).toBeUndefined()
        expect(queue.tail).toBeUndefined()
    })

    test('enqueue', () => {
        expect(queue.enqueue(1)).toBeTruthy()
        expect(queue.length).toEqual(1)
        expect(queue.enqueue(2)).toBeTruthy()
        expect(queue.length).toEqual(2)
        expect(queue.enqueue(3)).toBeTruthy()
        expect(queue.length).toEqual(3)
        expect(queue.head).toEqual(1)
        expect(queue.tail).toEqual(3)
        expect(queue.values()).toEqual([1, 2, 3])
    })

    test('dequeue', () => {
        expect(queue.dequeue()).toEqual(1)
        expect(queue.head).toEqual(2)
        expect(queue.dequeue()).toEqual(2)
        expect(queue.head).toEqual(3)
        expect(queue.tail).toEqual(3)
        expect(queue.length).toEqual(1)
    })

    test('clear to empty', () => {
        queue.clear()
        expect(queue.head).toBeUndefined()
        expect(queue.tail).toBeUndefined()
        expect(queue.length).toEqual(0)
        expect(queue.dequeue()).toBeUndefined()
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

    test('create', () => {
        expect(priorityQueue.length).toEqual(0)
        expect(priorityQueue.min).toBeUndefined()
        expect(priorityQueue.max).toBeUndefined()
        expect(priorityQueue.values()).toEqual([])
    })

    test('enqueue', () => {
        priorityQueue.enqueue(elementMid, priorityMid)
        expect(priorityQueue.length).toEqual(1)
        expect(priorityQueue.min).toEqual(elementMid)
        expect(priorityQueue.max).toEqual(elementMid)
        expect(priorityQueue.values()).toEqual([elementMid])
    })

    test('enqueue lower priority', () => {
        priorityQueue.enqueue(elementLow, priorityLow)
        expect(priorityQueue.length).toEqual(2)
        expect(priorityQueue.min).toEqual(elementLow)
        expect(priorityQueue.max).toEqual(elementMid)
        expect(priorityQueue.values()).toEqual([elementLow, elementMid])
    })

    test('enqueue higher priority', () => {
        priorityQueue.enqueue(elementHigh, priorityHigh)
        expect(priorityQueue.length).toEqual(3)
        expect(priorityQueue.min).toEqual(elementLow)
        expect(priorityQueue.max).toEqual(elementHigh)
        expect(priorityQueue.values()).toEqual([elementLow, elementMid, elementHigh])
    })

    test('dequeuemin', () => {
        expect(priorityQueue.dequeuemin()).toEqual(elementLow)
        expect(priorityQueue.length).toEqual(2)
    })

    test('dequeuemax', () => {
        expect(priorityQueue.dequeuemax()).toEqual(elementHigh)
        expect(priorityQueue.length).toEqual(1)
    })

    test('clear to empty', () => {
        priorityQueue.clear()
        expect(priorityQueue.length).toEqual(0)
    })
})
