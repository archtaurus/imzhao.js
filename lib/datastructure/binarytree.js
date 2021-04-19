function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

function BinaryTree() {
    this.root = null
    this.size = 0
}

BinaryTree.prototype.isEmpty = function () {
    return this.root === null
}

BinaryTree.prototype.clear = function () {
    this.root = null
    this.size = 0
}

function BinarySearchTree(
    comparator = function (a, b) {
        const d = a - b
        if (d < 0) return -1
        if (d > 0) return 1
        if (d === 0) return 0
    }
) {
    this.comparator = comparator
}

BinarySearchTree.prototype = new BinaryTree()

// returns true if inserted, false if duplicate
BinarySearchTree.prototype.insert = function (data) {
    if (this.root === null) {
        this.root = new Node(data)
        this.size++
        return true
    }
    let node = this.root
    while (true) {
        switch (this.comparator(data, node?.data)) {
            case -1: {
                if (node.left === null) {
                    node.left = new Node(data)
                    this.size++
                    return true
                }
                node = node.left
                break
            }
            case 1: {
                if (node.right === null) {
                    node.right = new Node(data)
                    this.size++
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

// returns node if found, null otherwise
BinarySearchTree.prototype.search = function (data) {
    let node = this.root
    while (node !== null) {
        switch (this.comparator(data, node?.data)) {
            case 0:
                return node
            case -1:
                node = node.left
                break
            case 1:
                node = node.right
                break
            default:
                return null
        }
    }
    return null
}

BinarySearchTree.prototype.min = function () {
    let node = this.root
    while (node?.left) node = node.left
    return node
}

BinarySearchTree.prototype.max = function () {
    let node = this.root
    while (node?.right) node = node.right
    return node
}

//     this.contains = (data) => {}
//     this.height = () => {}
//     this.min = () => {}
//     this.max = () => {}
//     this.search = (data) => {}
//     // 前序递归遍历
//     this.preOrderTraverse = (node = root) => {}
//     // 中序递归遍历
//     this.inOrderTraverse = (node = root) => {}
//     // 后序递归遍历
//     this.postOrderTraverse = (node = root) => {}
//     // 前序遍历非递归操作
//     this.preOrderByStack = (node = root) => {}
//     // 中序遍历非递归操作
//     this.inOrderByStack = (node = root) => {}
//     // 后序遍历非递归操作
//     this.postOrderByStack = (node = root) => {}
//     // 按照层次遍历二叉树
//     this.levelOrderByStack = () => {}
// }

module.exports = BinarySearchTree
