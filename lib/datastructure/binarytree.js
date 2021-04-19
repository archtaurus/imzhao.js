function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

function BinaryTree(comparator) {
    let root = null
    let size = 0
    comparator =
        comparator ||
        function (a, b) {
            const d = a - b
            if (d < 0) return -1
            if (d > 0) return 1
            if (d === 0) return 0
        }
    this.size = () => size
    this.isEmpty = () => size === 0

    // returns true if inserted, false if duplicate
    this.insert = (data) => {
        const newNode = new Node(data)
        if (root === null) {
            root = newNode
            size++
            return true
        }
        let node = root // 当前节点
        while (true) {
            switch (comparator(data, node.data)) {
                case -1: {
                    if (node.left === null) {
                        node.left = newNode
                        size++
                        return true
                    }
                    node = node.left
                    break
                }
                case 1: {
                    if (node.right === null) {
                        node.right = newNode
                        size++
                        return true
                    }
                    node = node.right
                    break
                }
                default:
                    return false
            }
        }
    }

    this.remove = (data) => {
        if (root === null) return false
    }

    this.contains = (data) => {}
    this.height = () => {}
    this.min = () => {}
    this.max = () => {}
    this.search = (data) => {}
    // 前序递归遍历
    this.preOrderTraverse = (node = root) => {}
    // 中序递归遍历
    this.inOrderTraverse = (node = root) => {}
    // 后序递归遍历
    this.postOrderTraverse = (node = root) => {}
    // 前序遍历非递归操作
    this.preOrderByStack = (node = root) => {}
    // 中序遍历非递归操作
    this.inOrderByStack = (node = root) => {}
    // 后序遍历非递归操作
    this.postOrderByStack = (node = root) => {}
    // 按照层次遍历二叉树
    this.levelOrderByStack = () => {}
}

module.exports = BinaryTree
