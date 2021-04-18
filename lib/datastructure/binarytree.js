'use strict'

module.exports = (() => {
    const Node = function (data, parent = null) {
        this.data = data
        this.left = null
        this.right = null
        this.parent = parent
    }

    const BinaryTree = function () {
        let root = null
        let size = 0
        this.size = () => size
        this.isEmpty = () => size === 0
        this.insert = (data) => {
            const newNode = new Node(data)
            if (size === 0) {
                root = node
            } else {
            }
            size++
        }
        this.delete = (data) => {}
        this.contains = (data) => {}
    }

    return BinaryTree
})()
