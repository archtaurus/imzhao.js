const { Queue, PriorityQueue } = require('../../lib/datastructure')

describe('imzhao.datastructure.queue', () => {
    const queue = new Queue()
    test('create', () => {
        expect(queue.length).toEqual(0)
        expect(queue.isEmpty).toBeTruthy()
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
        expect(queue.isEmpty).toBeFalsy()
    })

    test('dequeue', () => {
        expect(queue.head).toEqual(1)
        expect(queue.dequeue()).toEqual(1)
        expect(queue.head).toEqual(2)
        expect(queue.dequeue()).toEqual(2)
        expect(queue.head).toEqual(3)
        expect(queue.tail).toEqual(3)
        expect(queue.length).toEqual(1)
    })

    test('clear to empty', () => {
        expect(queue.head).toEqual(3)
        queue.clear()
        expect(queue.head).toBeUndefined()
        expect(queue.tail).toBeUndefined()
        expect(queue.dequeue()).toBeUndefined()
        expect(queue.length).toEqual(0)
        expect(queue.isEmpty).toBeTruthy()
    })
})

describe('imzhao.datastructure.priorityQueue', () => {
    // const priorityQueue = new PriorityQueue()
    // const elementLow = 'low'
    // const priorityLow = 1
    // const elementMid = 'mid'
    // const priorityMid = 10
    // const elementHigh = 'high'
    // const priorityHigh = 100
    // test('create', () => {
    //     expect(priorityQueue.length).toEqual(0)
    //     expect(priorityQueue.head).toBeUndefined()
    //     expect(priorityQueue.tail).toBeUndefined()
    //     expect(priorityQueue.isEmpty).toBeTruthy()
    // })
    // test('enqueue', () => {
    //     priorityQueue.enqueue(elementMid, priorityMid)
    //     expect(priorityQueue.length).toEqual(1)
    //     expect(priorityQueue.isEmpty).toBeFalsy()
    //     expect(priorityQueue.head.element).toEqual(elementMid)
    //     expect(priorityQueue.head.priority).toEqual(priorityMid)
    //     expect(priorityQueue.tail.element).toEqual(elementMid)
    //     expect(priorityQueue.tail.priority).toEqual(priorityMid)
    // })
    // test('enqueue lower priority', () => {
    //     priorityQueue.enqueue(elementLow, priorityLow)
    //     expect(priorityQueue.length).toEqual(2)
    //     expect(priorityQueue.head.element).toEqual(elementMid)
    //     expect(priorityQueue.head.priority).toEqual(priorityMid)
    //     expect(priorityQueue.tail.element).toEqual(elementLow)
    //     expect(priorityQueue.tail.priority).toEqual(priorityLow)
    // })
    // test('enqueue higher priority', () => {
    //     priorityQueue.enqueue(elementHigh, priorityHigh)
    //     expect(priorityQueue.length).toEqual(3)
    //     expect(priorityQueue.head.element).toEqual(elementHigh)
    //     expect(priorityQueue.head.priority).toEqual(priorityHigh)
    //     expect(priorityQueue.tail.element).toEqual(elementLow)
    //     expect(priorityQueue.tail.priority).toEqual(priorityLow)
    // })
    // test('enqueue higher priority', () => {
    //     priorityQueue.enqueue(5, 5)
    //     expect(priorityQueue.toArray()).toEqual(['mid', 5, 'low'])
    //     priorityQueue.enqueue(elementHigh, priorityHigh)
    //     expect(priorityQueue.toString()).toEqual('high,mid,5,low')
    //     expect(priorityQueue.peek()).toEqual(elementHigh)
    //     expect(priorityQueue.dequeue()).toEqual(elementHigh)
    // })
    // test('clear to empty', () => {
    //     priorityQueue.clear()
    //     expect(priorityQueue.size()).toEqual(0)
    //     expect(priorityQueue.isEmpty()).toBeTruthy()
    // })
})
