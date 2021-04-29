const imzhao = require('../../lib')
const { LinkedList } = imzhao.datastructure

describe('#constructor', () => {
    describe('with no parameter', () => {
        it('should creates an empty list', () => {
            const list = new LinkedList()
            expect(list.head).toBeNull()
            expect(list.tail).toBeNull()
            expect(list.length).toEqual(0)
        })
    })
    describe('with non-iterable parameter', () => {
        it('should creates an empty list', () => {
            const list = new LinkedList(42)
            expect(list.head).toBeNull()
            expect(list.tail).toBeNull()
            expect(list.length).toEqual(0)
        })
    })
    describe('with iterable parameter', () => {
        it('should creates a list with the given items', () => {
            const list = new LinkedList(['hello', 'world'])
            expect(list.first).toEqual('hello')
            expect(list.last).toEqual('world')
            expect(list.length).toEqual(2)
        })
    })
})

describe('#prepend', () => {
    describe('with no parameter', () => {
        it('should do nothing to the list and return null', () => {
            const list = new LinkedList()
            expect(list.prepend()).toBeNull()
            expect(list.length).toEqual(0)
        })
    })
    describe('with a given data', () => {
        const data = 0
        const items = [1, 2]
        const list = new LinkedList(items)
        const head = list.head
        const tail = list.tail
        const node = list.prepend(data)
        it('should add and return a new node at the begining of the list with that data', () => {
            expect(node.data).toEqual(data)
            expect(list.tail).toEqual(tail)
            expect(list.length).toEqual(items.length + 1)
            expect(list.first).toEqual(data)
            expect(list.head).toEqual(node)
            expect(head.prev).toEqual(node)
            expect(node.next).toEqual(head)
            expect(node.prev).toBeNull()
        })
    })
})

describe('#append', () => {
    describe('with no parameter', () => {
        it('should do nothing to the list and return null', () => {
            const list = new LinkedList()
            expect(list.append()).toBeNull()
            expect(list.length).toEqual(0)
        })
    })
    describe('with a given data', () => {
        const data = 3
        const items = [1, 2]
        const list = new LinkedList(items)
        const head = list.head
        const tail = list.tail
        const node = list.append(data)
        it('should add and return a new node at the end of the list with that data', () => {
            expect(node.data).toEqual(data)
            expect(list.head).toEqual(head)
            expect(list.length).toEqual(items.length + 1)
            expect(list.last).toEqual(data)
            expect(list.tail).toEqual(node)
            expect(tail.next).toEqual(node)
            expect(node.prev).toEqual(tail)
            expect(node.next).toBeNull()
        })
    })
})

describe('#shift', () => {
    describe('from an empty list', () => {
        it('should return undefined', () => {
            const list = new LinkedList()
            expect(list.shift()).toBeUndefined()
        })
    })
    describe('from a list with only one node', () => {
        it('should return the data and make the list empty', () => {
            const list = new LinkedList([1])
            const data = list.shift()
            expect(data).toEqual(1)
            expect(list.head).toBeNull()
            expect(list.tail).toBeNull()
            expect(list.length).toEqual(0)
        })
    })
    describe('otherwise', () => {
        it('should return the data and make the list head move backward', () => {
            const list = new LinkedList([1, 2, 3])
            const data = list.shift()
            expect(data).toEqual(1)
            expect(list.length).toEqual(2)
            expect(list.first).toEqual(2)
            expect(list.last).toEqual(3)
        })
    })
})

describe('#pop', () => {
    describe('from an empty list', () => {
        it('should return undefined', () => {
            const list = new LinkedList()
            expect(list.pop()).toBeUndefined()
        })
    })
    describe('from a list with only one node', () => {
        it('should return the data and make the list empty', () => {
            const list = new LinkedList([1])
            const data = list.pop()
            expect(data).toEqual(1)
            expect(list.head).toBeNull()
            expect(list.tail).toBeNull()
            expect(list.length).toEqual(0)
        })
    })
    describe('otherwise', () => {
        it('should return the data and make the list tail move forward', () => {
            const list = new LinkedList([1, 2, 3])
            const data = list.pop()
            expect(data).toEqual(3)
            expect(list.length).toEqual(2)
            expect(list.first).toEqual(1)
            expect(list.last).toEqual(2)
        })
    })
})

describe('#index', () => {
    describe('with no parameter', () => {
        const list = new LinkedList([1, 2, 3])
        it('should return -1', () => {
            expect(list.index()).toEqual(-1)
        })
    })
    describe('from an empty list', () => {
        const list = new LinkedList()
        it('should return -1', () => {
            expect(list.index(1)).toEqual(-1)
        })
    })
    describe('when data is not found', () => {
        const list = new LinkedList([1, 2, 3])
        it('should return -1', () => {
            expect(list.index('hello')).toEqual(-1)
        })
    })
    describe('otherwise', () => {
        const list = new LinkedList([1, 2, 3, 4, 5])
        it('should return the index of node for that data', () => {
            expect(list.index(3)).toEqual(2)
        })
    })
})

// test('get and getNode', () => {
//     const list = new LinkedList([1, 2, 3])
//     expect(list.getNode(0).data).toEqual(1)
//     expect(list.get(0)).toEqual(1)
//     expect(list.getNode(1).data).toEqual(2)
//     expect(list.get(1)).toEqual(2)
//     expect(list.getNode(2).data).toEqual(3)
//     expect(list.get(2)).toEqual(3)
//     expect(list.getNode(3)).toBeNull()
//     expect(list.get(3)).toBeNull()
//     expect(list.getNode(-1)).toBeNull()
//     expect(list.get(-1)).toBeNull()
//     expect(list.getNode()).toBeNull()
//     expect(list.get()).toBeNull()
// })

// test('insert to empty list', () => {
//     const list = new LinkedList()
//     const data = 'hello'
//     expect(list.insert(1, data)).toBeNull()
//     expect(list.insert(-1, data)).toBeNull()
//     const node = list.insert(0, data)
//     expect(node.data).toEqual(data)
//     expect(node.prev).toBeNull()
//     expect(node.next).toBeNull()
//     expect(list.head).toEqual(node)
//     expect(list.tail).toEqual(node)
// })

// test('insert node to list size of 1 at 0', () => {
//     const list = new LinkedList()
//     const node1 = list.append(1)
//     const data = 0
//     expect(list.insert(-1, data)).toBeNull()
//     expect(list.insert(2, data)).toBeNull()
//     const node0 = list.insert(0, data)
//     expect(node0.data).toEqual(data)
//     expect(list.head).toEqual(node0)
//     expect(node0.prev).toBeNull()
//     expect(node0.next).toEqual(node1)
//     expect(node1.prev).toEqual(node0)
//     expect(node1.next).toBeNull()
// })

// test('insert node to list size of 1 at 1', () => {
//     const list = new LinkedList()
//     const node0 = list.append(0)
//     const data = 1
//     expect(list.insert(-1, 1)).toBeNull()
//     expect(list.insert(2, data)).toBeNull()
//     const node1 = list.insert(1, data)
//     expect(node1.data).toEqual(data)
//     expect(list.tail).toEqual(node1)
//     expect(node0.prev).toBeNull()
//     expect(node0.next).toEqual(node1)
//     expect(node1.prev).toEqual(node0)
//     expect(node1.next).toBeNull()
// })

// test('insert node to list in the middle', () => {
//     const list = new LinkedList()
//     const front = list.append('front')
//     const behind = list.append('behind')
//     expect(list.insert(-1, 1)).toBeNull()
//     expect(list.insert(3, 1)).toBeNull()
//     const middle = list.insert(1, 'middle')
//     expect(middle.data).toEqual('middle')
//     expect(front.next).toEqual(middle)
//     expect(middle.prev).toEqual(front)
//     expect(middle.next).toEqual(behind)
//     expect(behind.prev).toEqual(middle)
// })

// test('indexOf', () => {
//     const list = new LinkedList([0, 1, 2])
//     expect(list.indexOf(0)).toEqual(0)
//     expect(list.indexOf(1)).toEqual(1)
//     expect(list.indexOf(2)).toEqual(2)
//     expect(list.indexOf(3)).toEqual(-1)
// })

// test('update', () => {
//     const list = new LinkedList([0, 1, 2])
//     expect(list.set(-1, 'hello')).toBeFalsy()
//     expect(list.set(3, 'hello')).toBeFalsy()
//     expect(list.set(0, 'hello')).toBeTruthy()
//     expect(list.set(1, 'hello')).toBeTruthy()
//     expect(list.set(2, 'hello')).toBeTruthy()
//     expect(list.get(0)).toEqual('hello')
//     expect(list.get(1)).toEqual('hello')
//     expect(list.get(2)).toEqual('hello')
// })

// test('removeAt', () => {
//     const list = new LinkedList()
//     expect(list.removeAt(-1)).toBeFalsy()
//     expect(list.removeAt(0)).toBeFalsy()
//     expect(list.removeAt(1)).toBeFalsy()
//     list.append(1)
//     list.append(2)
//     expect(list.removeAt(0)).toBeTruthy()
//     expect(list.head.next).toBeNull()
//     expect(list.head.prev).toBeNull()
//     expect(list.head.data).toEqual(2)
//     expect(list.tail.data).toEqual(2)
//     expect(list.length).toEqual(1)
//     list.append(3)
//     expect(list.removeAt(1)).toBeTruthy()
//     expect(list.head.next).toBeNull()
//     expect(list.head.prev).toBeNull()
//     expect(list.head.data).toEqual(2)
//     expect(list.tail.data).toEqual(2)
//     expect(list.length).toEqual(1)
//     expect(list.removeAt(0)).toBeTruthy()
//     expect(list.head).toBeNull()
//     expect(list.tail).toBeNull()
//     expect(list.length).toEqual(0)
//     list.append(0)
//     list.append(1)
//     list.append(2)
//     list.append(3)
//     list.append(4)
//     expect(list.removeAt(5)).toBeFalsy()
//     expect(list.length).toEqual(5)
//     expect(list.removeAt(4)).toBeTruthy()
//     expect(list.length).toEqual(4)
//     expect(list.values()).toEqual([0, 1, 2, 3])
//     expect(list.removeAt(0)).toBeTruthy()
//     expect(list.length).toEqual(3)
//     expect(list.values()).toEqual([1, 2, 3])
//     expect(list.removeAt(1)).toBeTruthy()
//     expect(list.length).toEqual(2)
//     expect(list.values()).toEqual([1, 3])
// })

// test('remove', () => {
//     const list = new LinkedList([1, 2, 3, 4, 5])
//     list.remove(1)
//     list.remove(3)
//     list.remove(5)
//     expect(list.values()).toEqual([2, 4])
//     list.remove(2)
//     expect(list.values()).toEqual([4])
//     list.append(2)
//     list.remove(4)
//     expect(list.values()).toEqual([2])
//     list.remove(2)
//     expect(list.values()).toEqual([])
//     expect(list.values(true)).toEqual([])
// })

// test('values', () => {
//     const list = new LinkedList([1, 2, 3])
//     expect(list.values()).toEqual([1, 2, 3])
//     expect(list.values((reverse = true))).toEqual([3, 2, 1])
// })
// })
