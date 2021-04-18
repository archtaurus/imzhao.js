module.exports = (() => {
    function BinaryTree(comparator) {
        function Node(data) {
            this.data = data
            this.left = null
            this.right = null
        }
        let root = null
        let size = 0
        comparator =
            comparator ||
            function (a, b) {
                try {
                    if (b === undefined) return null
                    const d = a - b
                    if (d < 0) return -1
                    if (d > 0) return 1
                    if (d === 0) return 0
                } catch (error) {
                    console.error(error.message)
                }
            }
        this.size = () => size
        this.isEmpty = () => size === 0
        this.insert = (data) => {
            const newNode = new Node(data)
            let node = root // 当前节点
            while (true) {
                switch (comparator(data, node?.data)) {
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
                    case null: {
                        root = newNode
                        size++
                        return true
                    }
                    default:
                        return false
                }
            }
        }

        this.delete = (data) => {}
        this.contains = (data) => {}
        this.height = () => {}
        this.find = (data) => {}
        this.findByKey = (key) => {}
        // 前序递归遍历
        this.preOrderTraverse = () => {}
        // 中序递归遍历
        this.inOrderTraverse = () => {}
        // 后序递归遍历
        this.postOrderTraverse = () => {}
        // 前序遍历非递归操作
        this.preOrderByStack = () => {}
        // 中序遍历非递归操作
        this.inOrderByStack = () => {}
        // 后序遍历非递归操作
        this.postOrderByStack = () => {}
        // 按照层次遍历二叉树
        this.levelOrderByStack = () => {}
    }

    return BinaryTree
})()
