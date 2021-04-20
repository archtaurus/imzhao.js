const { BinarySearchTree } = require('../../lib/datastructure')
const { randomInt } = require('../../lib/math')

describe('imzhao.datastructure.binarytree', () => {
    const tree = new BinarySearchTree()

    test('create and insert some nodes', () => {
        expect(tree.root).toBeNull()
        expect(tree.size).toEqual(0)
        // insert 100 as root
        expect(tree.insert(100)).toBeTruthy()
        expect(tree.size).toEqual(1)
        expect(tree.root.left).toBeNull()
        expect(tree.root.right).toBeNull()
        expect(tree.root.data).toEqual(100)
        // insert 50 should at leftside
        expect(tree.insert(50)).toBeTruthy()
        expect(tree.size).toEqual(2)
        expect(tree.root.left.data).toEqual(50)
        expect(tree.root.right).toBeNull()
        // insert 200 should at rightside
        expect(tree.insert(200)).toBeTruthy()
        expect(tree.size).toEqual(3)
        expect(tree.root.right.data).toEqual(200)
        // insert 10 should at leftside
        expect(tree.insert(10)).toBeTruthy()
        expect(tree.size).toEqual(4)
        expect(tree.root.left.left.data).toEqual(10)
        // insert 75 should at rightside
        expect(tree.insert(75)).toBeTruthy()
        expect(tree.size).toEqual(5)
        expect(tree.root.left.right.data).toEqual(75)
        // insert 250 should at rightside
        expect(tree.insert(250)).toBeTruthy()
        expect(tree.size).toEqual(6)
        expect(tree.root.right.right.data).toEqual(250)
        // insert 150 should at leftside
        expect(tree.insert(150)).toBeTruthy()
        expect(tree.size).toEqual(7)
        expect(tree.root.right.left.data).toEqual(150)
    })

    test('search', () => {
        expect(tree.search()).toBeNull()
        expect(tree.search(1)).toBeNull()
        const node = tree.search(100)
        expect(node.data).toEqual(100)
        expect(node.left.data).toEqual(50)
        expect(node.right.data).toEqual(200)
    })

    test('min and max', () => {
        const tree = new BinarySearchTree()
        let min, max
        for (let i = 0; i < 1000; i++) {
            const random = randomInt(-10000, 10000)
            tree.insert(random)
            if (!min || random < min) min = random
            if (!max || random > max) max = random
        }
        const minNode = tree.min()
        const maxNode = tree.max()
        expect(minNode.data === min).toBeTruthy()
        expect(maxNode.data === max).toBeTruthy()
    })

    test('clear and isEmpty', () => {
        expect(tree.size).toEqual(7)
        tree.clear()
        expect(tree.size).toEqual(0)
        expect(tree.isEmpty()).toBeTruthy()
    })
})
