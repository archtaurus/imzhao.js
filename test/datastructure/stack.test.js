const imzhao = require('imzhao')
const { Stack } = imzhao.datastructure
const list = [1, 2, 3]
const item = 4
const stack = new Stack(list)

describe('imzhao.datastructure.stack', () => {
    test('create', () => {
        expect(new Stack().size()).toEqual(0)
        expect(stack.size()).toEqual(list.length)
        expect(stack.isEmpty()).toBeFalsy()
    })
    test('items', () => {
        expect(stack.items().toString()).toBe(list.toString())
    })
    test('peek', () => {
        expect(stack.peek()).toEqual(list[list.length - 1])
    })
    test('push', () => {
        stack.push(item)
        expect(stack.size()).toEqual(list.length + 1)
    })
    test('pop', () => {
        expect(stack.pop()).toEqual(item)
        expect(stack.size()).toEqual(list.length)
    })
    test('clear to empty', () => {
        stack.clear()
        expect(stack.size()).toEqual(0)
        expect(stack.isEmpty()).toBeTruthy()
    })
})
