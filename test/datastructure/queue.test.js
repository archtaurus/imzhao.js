const imzhao = require('../../lib')
const { Queue } = imzhao.datastructure
const list = [1, 2, 3]
const item = 4
const queue = new Queue(list)

describe('imzhao.datastructure.queue', () => {
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
