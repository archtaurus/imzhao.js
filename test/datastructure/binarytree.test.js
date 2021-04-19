const imzhao = require('imzhao')

describe('imzhao.datastructure.binarytree', () => {
    const { BinarySearchTree } = imzhao.datastructure

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
        tree.insert(2)
        tree.insert(1)
        tree.insert(3)
        tree.insert(4)
        const min = tree.min()
        const max = tree.max()
        expect(min.data).toEqual(1)
        expect(max.data).toEqual(4)
    })
})
