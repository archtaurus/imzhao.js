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
        expect(stack.push()).toBeFalsy()
        expect(stack.push(1)).toBeTruthy()
        expect(stack.size()).toEqual(1)
        expect(stack.values()).toEqual([1])
        expect(stack.push(2)).toBeTruthy()
        expect(stack.size()).toEqual(2)
        expect(stack.values()).toEqual([1, 2])
    })

    test('pop', () => {
        const stack = new Stack([1, 2, 3])
        expect(stack.size()).toEqual(3)
        expect(stack.pop()).toEqual(3)
        expect(stack.size()).toEqual(2)
        expect(stack.pop()).toEqual(2)
        expect(stack.size()).toEqual(1)
        expect(stack.pop()).toEqual(1)
        expect(stack.size()).toEqual(0)
        expect(stack.isEmpty()).toBeTruthy()
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

    test('extends', () => {
        const stack = new Stack([1])
        expect(stack.peek()).toEqual(1)
        expect(stack.extends()).toBeFalsy()
        expect(stack.extends([2, 3])).toBeTruthy()
        expect(stack.values()).toEqual([1, 2, 3])
    })

    test('clear to empty', () => {
        const stack = new Stack([1, 2, 3])
        stack.clear()
        expect(stack.size()).toEqual(0)
        expect(stack.isEmpty()).toBeTruthy()
    })
})
