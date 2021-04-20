const { BinarySearchTree } = require('../../lib/datastructure')
const { randomInt } = require('../../lib/math')

describe('imzhao.datastructure.binarytree', () => {
    test('clear', () => {
        const tree = new BinarySearchTree()
        expect(tree.insert(1)).toBeTruthy()
        expect(tree.size).toEqual(1)
        expect(tree.insert(2)).toBeTruthy()
        expect(tree.size).toEqual(2)
        tree.clear()
        expect(tree.isEmpty()).toBeTruthy()
    })

    test('insert', () => {
        const tree = new BinarySearchTree()
        expect(tree.size).toEqual(0)
        expect(tree.insert(2)).toBeTruthy()
        expect(tree.size).toEqual(1)
        expect(tree.insert(1)).toBeTruthy()
        expect(tree.size).toEqual(2)
        expect(tree.insert(3)).toBeTruthy()
        expect(tree.size).toEqual(3)
        expect(tree.insert(4)).toBeTruthy()
        expect(tree.size).toEqual(4)
        expect(tree.insert(3)).toBeFalsy()
        expect(tree.size).toEqual(4)
    })

    test('search', () => {
        const tree = new BinarySearchTree()
        expect(tree.search(1)).toEqual(null)
        tree.insert(2)
        tree.insert(1)
        tree.insert(3)
        tree.insert(4)
        expect(tree.search(5)).toEqual(null)
        const node = tree.search(3)
        expect(node.data).toEqual(3)
        expect(node.left).toEqual(null)
        expect(node.right.data).toEqual(4)
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
        // console.log({ min, minNode, max, maxNode, size: tree.size })
        expect(minNode.data === min).toBeTruthy()
        expect(maxNode.data === max).toBeTruthy()
    })
})
