/**
 * 二叉树模块
 * @file binarytree.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 二叉树节点
 */
class Node {
    constructor(data) {
        this.data = data
        this.parent = null
        this.left = null
        this.right = null
    }
}

/**
 * 二叉树
 */
class BinaryTree {
    constructor() {
        this.root = null
        this.size = 0
    }

    isEmpty() {
        return this.root === null
    }

    clear() {
        this.root = null
        this.size = 0
    }
}

/**
 * 二叉搜索树
 */
class BinarySearchTree extends BinaryTree {
    constructor(
        comparator = function (a, b) {
            if (a < b) return -1
            if (a > b) return 1
            if (a === b) return 0
        }
    ) {
        super()
        this.comparator = comparator
    }

    /**
     * 插入节点
     * @param {*} data
     * @returns {Boolean}
     */
    insert(data) {
        const newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
            this.size++
            return true
        }
        let node = this.root
        while (true) {
            switch (this.comparator(newNode.data, node?.data)) {
                case -1: {
                    if (node.left === null) {
                        newNode.parent = node
                        node.left = newNode
                        this.size++
                        return true
                    }
                    node = node.left
                    break
                }
                case 1: {
                    if (node.right === null) {
                        newNode.parent = node
                        node.right = newNode
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

    /**
     * 返回指定节点
     * @param {*} data
     * @returns {Node}
     */
    search(data) {
        if (!data) return null
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

    /**
     * 返回树是否包含某节点
     * @param {*} data
     * @returns {Boolean}
     */
    contains(data) {
        return !!this.search(data)
    }

    /**
     * 返回指定节点为根的子树高度
     * @param {*} node
     * @returns {Number}
     */
    height(node = this.root) {
        if (!node) return 0
        return 1 + Math.max(this.height(node.left), this.height(node.right))
    }

    /**
     * 返回指定节点的最小子节点
     * @param {Node} node
     * @returns {Node}
     */
    min(node) {
        node = node || this.root
        while (node?.left) node = node.left
        return node
    }

    /**
     * 返回指定节点的最大子节点
     * @param {Node} node
     * @returns {Node}
     */
    max(node) {
        node = node || this.root
        while (node?.right) node = node.right
        return node
    }

    /**
     * 删除指定节点
     * @param {*} data
     * @returns {Boolean}
     */
    remove(data) {
        if (!data) return false

        const node = this.search(data)
        if (!node) return false

        const leftChild = node.left
        const rightChild = node.right
        const parentNode = node.parent // 注意 root 节点没有父节点

        // dirFromParent means node is at parent.left (-1) or parent.right (1)
        const dirFromParent = this.comparator(node.data, parentNode?.data)

        // node 为叶子节点（没有子树）时，其父节点对应子节点 child 为空
        let child = null
        // node 只有一棵子树时
        if (!!leftChild ^ !!rightChild) child = leftChild || rightChild
        // node 有两棵子树时
        else if (leftChild && rightChild) {
            // 左树最大节点为接回节点，右树保持不变并接在上接回节点右侧
            child = this.max(leftChild)

            child.right = rightChild
            rightChild.parent = child

            child.left = leftChild
            leftChild.parent = child

            if (child.parent) child.parent.right = null
        }

        // 将子树链接回
        if (parentNode) {
            if (dirFromParent === -1) parentNode.left = child
            else parentNode.right = child
            if (child) child.parent = parentNode
        } else this.root = child

        this.size--
        return true
    }
}

// 前序递归遍历 TODO 非递归遍历操作 preOrderTraverse
BinarySearchTree.prototype.preOrderTraverse = function* (node = this.root) {
    if (node !== null) {
        yield node.data
        yield* this.preOrderTraverse(node.left)
        yield* this.preOrderTraverse(node.right)
    }
}

// 中序递归遍历 TODO 非递归遍历操作 inOrderTraverse
BinarySearchTree.prototype.inOrderTraverse = function* (node = this.root) {
    if (node !== null) {
        yield* this.inOrderTraverse(node.left)
        yield node.data
        yield* this.inOrderTraverse(node.right)
    }
}

// 后序递归遍历 TODO 非递归遍历操作 postOrderTraverse
BinarySearchTree.prototype.postOrderTraverse = function* (node = this.root) {
    if (node !== null) {
        yield* this.postOrderTraverse(node.left)
        yield* this.postOrderTraverse(node.right)
        yield node.data
    }
}

// 按照层次遍历二叉树 (广度优先遍历)
BinarySearchTree.prototype.levelOrderTraverse = function* (node = this.root) {
    const { Queue } = require('./queue')
    const queue = new Queue()
    queue.enqueue(node)
    while (!queue.isEmpty()) {
        const { data, left, right } = queue.dequeue()
        yield data
        left && queue.enqueue(left)
        right && queue.enqueue(right)
    }
}

// export for commonJS or browser
if (typeof module && typeof module.exports) module.exports = BinarySearchTree
else window.BinarySearchTree = BinarySearchTree
