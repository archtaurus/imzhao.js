const { Stack } = require('../../lib/datastructure')

describe('imzhao.datastructure.stack', () => {
    test('create', () => {
        const stack = new Stack()
        expect(stack.size()).toEqual(0)
        expect(stack.isEmpty()).toBeTruthy()
    })

    test('values', () => {
        expect(new Stack().values()).toEqual([])
        expect(new Stack([1, 2, 3]).values()).toEqual([1, 2, 3])
    })

    test('push', () => {
        const stack = new Stack()
        stack.push(1)
        expect(stack.size()).toEqual(1)
        expect(stack.toString()).toEqual('1')
        stack.push(2)
        expect(stack.toString()).toEqual('1,2')
    })

    test('pop', () => {
        const stack = new Stack([1, 2, 3])
        expect(stack.pop()).toEqual(3)
        expect(stack.size()).toEqual(2)
        expect(stack.pop()).toEqual(2)
        expect(stack.size()).toEqual(1)
        expect(stack.pop()).toEqual(1)
        expect(stack.size()).toEqual(0)
        expect(stack.pop()).toBeUndefined()
    })

    test('peek', () => {
        const stack = new Stack([])
        expect(stack.peek()).toBeUndefined()
        stack.push(1)
        expect(stack.peek()).toEqual(1)
        stack.push(2)
        expect(stack.peek()).toEqual(2)
    })

    test('clear to empty', () => {
        const stack = new Stack([1, 2, 3])
        stack.clear()
        expect(stack.size()).toEqual(0)
        expect(stack.isEmpty()).toBeTruthy()
    })
})
