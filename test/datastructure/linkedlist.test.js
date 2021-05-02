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

describe('#values', () => {
    it('should return all values in an array', () => {
        const list = new LinkedList([1, 2, 3])
        expect(list.values()).toEqual([1, 2, 3])
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

describe('#insert', () => {
    describe('insert to empty list', () => {
        const list = new LinkedList()
        test('should return null with no data', () => {
            expect(list.insert()).toBeNull()
        })
        test('should return null with invalid index', () => {
            expect(list.insert(1, 'data')).toBeNull()
            expect(list.insert(-1, 'data')).toBeNull()
        })
        test('insert to 0 index works', () => {
            const data = 'hello'
            const node = list.insert(0, data)
            expect(node.data).toEqual(data)
            expect(node.prev).toBeNull()
            expect(node.next).toBeNull()
            expect(list.head).toEqual(node)
            expect(list.tail).toEqual(node)
        })
    })
    describe('insert data to list size of 1 at 0 index', () => {
        test('node should be at the head', () => {
            const list = new LinkedList()
            const node1 = list.append(1)
            const data = 0
            const node0 = list.insert(0, data)
            expect(node0.data).toEqual(data)
            expect(list.head).toEqual(node0)
            expect(node0.prev).toBeNull()
            expect(node0.next).toEqual(node1)
            expect(node1.prev).toEqual(node0)
            expect(node1.next).toBeNull()
        })
    })
    describe('insert data to list size of 1 at 1 index', () => {
        test('node should be at the tail', () => {
            const list = new LinkedList()
            const node0 = list.append(0)
            const data = 1
            const node1 = list.insert(1, data)
            expect(node1.data).toEqual(data)
            expect(list.tail).toEqual(node1)
            expect(node0.prev).toBeNull()
            expect(node0.next).toEqual(node1)
            expect(node1.prev).toEqual(node0)
            expect(node1.next).toBeNull()
        })
    })
    describe('insert node to list in the middle', () => {
        test('works', () => {
            const list = new LinkedList()
            const front = list.append('front')
            const behind = list.append('behind')
            expect(list.insert(-1, 1)).toBeNull()
            expect(list.insert(3, 1)).toBeNull()
            const middle = list.insert(1, 'middle')
            expect(middle.data).toEqual('middle')
            expect(front.next).toEqual(middle)
            expect(middle.prev).toEqual(front)
            expect(middle.next).toEqual(behind)
            expect(behind.prev).toEqual(middle)
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

describe('#remove', () => {
    test('return undefined with invalid index', () => {
        const list = new LinkedList()
        expect(list.remove()).toBeUndefined()
        expect(list.remove(0)).toBeUndefined()
    })
    test('return the only data and leave an empty list', () => {
        const list = new LinkedList([1])
        expect(list.remove(0)).toEqual(1)
        expect(list.length).toEqual(0)
    })

    test('remove works', () => {
        const list = new LinkedList([1, 2, 3, 4, 5])
        expect(list.remove(0)).toEqual(1)
        expect(list.remove(1)).toEqual(3)
        expect(list.remove(2)).toEqual(5)
        expect(list.values()).toEqual([2, 4])
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

describe('#contains', () => {
    const list = new LinkedList([1, 2, 3])
    it('should return false with no parameter', () => {
        expect(list.contains()).toBeFalsy()
    })
    it('should return false when not found', () => {
        expect(list.contains(0)).toBeFalsy()
    })
    it('should return true when found', () => {
        expect(list.contains(1)).toBeTruthy()
    })
})

describe('#node', () => {
    const list = new LinkedList()
    const node0 = list.append(0)
    const node1 = list.append(1)
    const node2 = list.append(2)
    test('should return null with invalid index', () => {
        expect(list.node('test')).toBeNull()
        expect(list.node(-1)).toBeNull()
        expect(list.node(3)).toBeNull()
    })
    test('should return node by index', () => {
        expect(list.node(0)).toEqual(node0)
        expect(list.node(1)).toEqual(node1)
        expect(list.node(2)).toEqual(node2)
    })
})

describe('#get', () => {
    const list = new LinkedList([0, 1, 2])
    test('should return undefined with invalid index', () => {
        expect(list.get('test')).toBeUndefined()
        expect(list.get('-1')).toBeUndefined()
        expect(list.get('3')).toBeUndefined()
    })
    test('should return data by index', () => {
        expect(list.get(0)).toEqual(0)
        expect(list.get(1)).toEqual(1)
        expect(list.get(2)).toEqual(2)
    })
})

describe('#set', () => {
    const list = new LinkedList([0, 0, 0, 0, 0])
    test('should return false with invalid parameter', () => {
        expect(list.set()).toBeFalsy()
        expect(list.set(1)).toBeFalsy()
        expect(list.set(-1, 1)).toBeFalsy()
        expect(list.set(5, 1)).toBeFalsy()
    })
    test('should return true with valid parameter', () => {
        expect(list.set(0, 1)).toBeTruthy()
        expect(list.set(2, 1)).toBeTruthy()
        expect(list.set(4, 1)).toBeTruthy()
        expect(list.values()).toEqual([1, 0, 1, 0, 1])
    })
    test('.first and .last can set value', () => {
        list.first = 2
        list.last = 2
        expect(list.values()).toEqual([2, 0, 1, 0, 2])
    })
})
