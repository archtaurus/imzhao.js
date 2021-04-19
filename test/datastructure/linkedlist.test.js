const { LinkedList } = require('../../lib/datastructure')

describe('imzhao.datastructure.linkedlist', () => {
    const list = new LinkedList()
    const appendItem1 = 'appendItem1'
    const appendItem2 = 'appendItem2'
    const insertItem = 'insertItem'
    const insertIndex = 1

    test('create', () => {
        expect(list.length()).toEqual(0)
        expect(list.indexOf(1)).toEqual(-1)
    })

    test('append', () => {
        list.append(appendItem1)
        expect(list.length()).toEqual(1)
        list.append(appendItem2)
        expect(list.length()).toEqual(2)
        expect(list.indexOf(appendItem1)).toEqual(0)
        expect(list.indexOf(appendItem2)).toEqual(1)
    })

    test('insert', () => {
        list.insert(insertIndex, insertItem)
        expect(list.length()).toEqual(3)
        expect(list.indexOf(insertItem)).toEqual(insertIndex)
    })

    test('remove', () => {
        list.removeAt(insertIndex)
        expect(list.length()).toEqual(2)
        expect(list.indexOf(appendItem2)).toEqual(insertIndex)
        list.remove(appendItem1)
        expect(list.length()).toEqual(1)
        expect(list.indexOf(appendItem2)).toEqual(0)
    })
})
