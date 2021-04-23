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

    test('remove', () => {
        const tree = new BinarySearchTree()
        expect(tree.remove()).toBeFalsy()
        expect(tree.remove(0)).toBeFalsy()
        // 删除唯一根节点
        tree.insert(1)
        expect(tree.remove()).toBeFalsy()
        expect(tree.remove(0)).toBeFalsy()
        expect(tree.size).toEqual(1)
        expect(tree.remove(1)).toBeTruthy()
        expect(tree.isEmpty()).toBeTruthy()
        // 删除叶子节点
        tree.insert(1)
        tree.insert(2)
        expect(tree.remove(2)).toBeTruthy()
        expect(tree.size).toEqual(1)
        expect(tree.root.data).toEqual(1)
        expect(tree.root.left).toBeNull()
        expect(tree.root.right).toBeNull()
        // 删除有一片叶子的节点
        tree.insert(2)
        tree.insert(3)
        expect(tree.remove(2)).toBeTruthy()
        expect(tree.size).toEqual(2)
        expect(tree.search(3)).toEqual(tree.root.right)
        expect(tree.search(3).parent).toEqual(tree.root)
        tree.clear()
        expect(tree.size).toEqual(0)
        expect(tree.root).toBeNull()
        // 删除两侧都有子树的节点
        tree.insert(15)
        tree.insert(10)
        tree.insert(20)
        tree.insert(8)
        tree.insert(12)
        tree.insert(17)
        tree.insert(30)
        tree.insert(16)
        tree.insert(18)
        tree.insert(19)
        expect(tree.height()).toEqual(5)
        expect(tree.size).toEqual(10)

        const root = tree.search(15)
        const node17 = tree.search(17)
        const node18 = tree.search(18)
        const node19 = tree.search(19)
        // const node20 = tree.search(20)
        const node30 = tree.search(30)
        // 根节点是 15 节点
        expect(tree.root === root).toBeTruthy()
        // 18 节点以下 最大的是 19
        expect(tree.max(node17)).toEqual(node19)
        // 删除 20 节点
        expect(tree.remove(20)).toBeTruthy()
        expect(tree.size).toEqual(9)
        // 18 节点右节点应为空
        expect(node18.right).toBeNull()
        // root 和 19 节点应相连
        expect(root.right).toEqual(node19)
        expect(node19.parent).toEqual(root)
        // 19 和 17 节点应相连
        expect(node19.left).toEqual(node17)
        expect(node17.parent).toEqual(node19)
        // 19 和 30 节点应相连
        expect(node19.right).toEqual(node30)
        expect(node30.parent).toEqual(node19)
    })

    test('clear and isEmpty', () => {
        expect(tree.size).toEqual(7)
        tree.clear()
        expect(tree.size).toEqual(0)
        expect(tree.isEmpty()).toBeTruthy()
    })

    test('traverses', () => {
        const tree = new BinarySearchTree()
        tree.insert(15)
        tree.insert(10)
        tree.insert(20)
        tree.insert(8)
        tree.insert(12)
        tree.insert(17)
        tree.insert(30)
        tree.insert(16)
        tree.insert(18)
        tree.insert(19)
        /**
         *           15
         *     10          20
         *   8   12     17    30
         *            16  18
         *                  19
         */

        // tree.preOrderTraverse() //-> 15 10 8 12 20 17 16 18 19 30
        const preOrder = []
        const preOrderTraverse = tree.preOrderTraverse()
        while (true) {
            const { done, value } = preOrderTraverse.next()
            if (done) break
            preOrder.push(value)
        }
        expect(preOrder.toString()).toEqual('15,10,8,12,20,17,16,18,19,30')

        // tree.inOrderTraverse() //-> 15 10 8 12 20 17 16 18 19 30
        const inOrder = []
        const inOrderTraverse = tree.inOrderTraverse()
        while (true) {
            const { done, value } = inOrderTraverse.next()
            if (done) break
            inOrder.push(value)
        }
        expect(inOrder.toString()).toEqual('8,10,12,15,16,17,18,19,20,30')

        // tree.postOrderTraverse() //-> 8 12 10 16 19 18 17 30 20 15
        const postOrder = []
        const postOrderTraverse = tree.postOrderTraverse()
        while (true) {
            const { done, value } = postOrderTraverse.next()
            if (done) break
            postOrder.push(value)
        }
        expect(postOrder.toString()).toEqual('8,12,10,16,19,18,17,30,20,15')

        // tree.levelOrderTraverse() //-> 15 10 20 8 12 17 30 16 18 19
        const levelOrder = []
        const levelOrderTraverse = tree.levelOrderTraverse()
        while (true) {
            const { done, value } = levelOrderTraverse.next()
            if (done) break
            levelOrder.push(value)
        }
        expect(levelOrder.toString()).toEqual('15,10,20,8,12,17,30,16,18,19')
    })
})
