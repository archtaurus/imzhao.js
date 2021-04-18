const imzhao = require('imzhao')

describe('imzhao.datastructure.BinaryTree', () => {
    const { BinaryTree } = imzhao.datastructure
    const tree = new BinaryTree()

    test('create', () => {
        expect(tree.size()).toEqual(0)
        expect(tree.hasOwnProperty('isEmpty')).toBeTruthy()
        expect(tree.hasOwnProperty('insert')).toBeTruthy()
    })
})
