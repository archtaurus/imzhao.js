const imzhao = require('imzhao')

describe('imzhao.datastructure.BinaryTree', () => {
    const { BinaryTree } = imzhao.datastructure

    test('create', () => {
        const tree = new BinaryTree()
        expect(tree.hasOwnProperty('size')).toBeTruthy()
        expect(tree.hasOwnProperty('isEmpty')).toBeTruthy()
        expect(tree.hasOwnProperty('insert')).toBeTruthy()
        expect(tree.hasOwnProperty('delete')).toBeTruthy()
    })

    test('insert', () => {
        const tree = new BinaryTree()
        expect(tree.size()).toEqual(0)
        expect(tree.insert(2)).toBeTruthy()
        expect(tree.size()).toEqual(1)
        expect(tree.insert(1)).toBeTruthy()
        expect(tree.size()).toEqual(2)
        expect(tree.insert(3)).toBeTruthy()
        expect(tree.size()).toEqual(3)
        expect(tree.insert(4)).toBeTruthy()
        expect(tree.size()).toEqual(4)
        expect(tree.insert(3)).toBeFalsy()
        expect(tree.size()).toEqual(4)
    })
})
