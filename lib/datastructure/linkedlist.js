/**
 * 链表模块
 * @file linkedlist.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 双向链表节点类
 * @param {*} data
 */
class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

/**
 * 双向链表类
 * @param {Array} list 初始化数据数组
 */
class LinkedList {
    constructor(list) {
        this.head = null
        this.tail = null
        this.size = 0
        // 以初始化数组中的数据追加节点
        if (list) Array.from(list).forEach((item) => this.append(item))
    }

    /**
     * 返回链表是否为空
     * @returns {Boolean}
     */
    isEmpty() {
        return this.size === 0
    }

    /**
     * 在链表尾追加节点
     * @param {*} data
     * @returns {Node}
     */
    append(data) {
        const node = new Node(data)
        if (this.size === 0) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
        return node
    }

    /**
     * 获取指定位置上的节点, 位置越界时返回 null
     * @param {Number} index
     * @returns {Node}
     */
    getNode(index) {
        if (isNaN(index) || index < 0 || this.size <= index) return null
        let node = this.head
        for (let i = 0; i < index; i++) node = node.next
        return node
    }

    /**
     * 获取指定位置上节点的数据, 位置越界时返回 null
     * @param {Number} index
     * @returns {Node}
     */
    get(index) {
        const node = this.getNode(index)
        return node?.data || null
    }

    /**
     * 在链表指定位置添加节点，成功返回该节点，失败返回 null
     * @param {*} index
     * @param {*} data
     * @returns {Node}
     */
    insert(index, data) {
        // 插入位置越界
        if (index < 0 || this.size < index) return null
        // 当链表为空或在链表最后位置插入时，以调用append处理
        if (this.isEmpty() || index === this.size) return this.append(data)
        // 此时链表不为空，index指向某原有节点位置
        const node = new Node(data)
        if (index === 0) {
            node.next = this.head
            this.head.prev = node
            this.head = node
        } else {
            const current = this.getNode(index)
            node.prev = current.prev
            node.next = current
            current.prev.next = node
            current.prev = node
        }
        this.size++
        return node
    }

    /**
     * 在链表头插入数据
     * @param {*} data
     * @returns {Boolean}
     */
    shift(data) {
        return this.insert(0, data)
    }

    /**
     * 获取指定节点的位置，未找到时返回 -1
     * @param {*} data
     * @returns {Number}
     */
    indexOf(data) {
        for (let node = this.head, i = 0; node && i < this.size; i++) {
            if (node.data == data) return i
            node = node.next
        }
        return -1
    }

    /**
     * 修改指定位置节点，成功返回 true，否则返回 false
     * @param {*} index
     * @param {*} data
     * @returns {Boolean}
     */
    update(index, data) {
        const node = this.getNode(index)
        if (!node) return false
        node.data = data
        return true
    }

    /**
     * 删除指定位置上的节点，成功返回 true，失败返回 false
     * @param {Number} index
     * @returns {Boolean}
     */
    removeAt(index) {
        if (index < 0 || this.size <= index) return false
        if (index === 0) {
            if (this.size === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head.next.prev = null
                this.head = this.head.next
            }
        } else if (index === this.size - 1) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else {
            const node = this.getNode(index) // 该node指向待删除节点的前继节点
            node.prev.next = node.next
            node.next.prev = node.prev
        }
        this.size--
        return true
    }

    /**
     * 删除指定节点，成功返回 true，失败返回 false
     * @param {*} data
     * @returns {Boolean}
     */
    remove(data) {
        return this.removeAt(this.indexOf(data))
    }

    /**
     * 以数组形式返回链表数据
     * @param {Boolean} reverse
     * @returns {Array}
     */
    toArray(reverse = false) {
        return [...this.iterator(reverse)]
    }

    /**
     * 以字符串形式返回链表数据
     * @param {Boolean} reverse
     * @returns {String}
     */
    toString(reverse = false) {
        return [...this.iterator(reverse)].toString()
    }

    *iterator(reverse, node) {
        if (reverse) {
            node = node || this.tail
            while (node) {
                yield node.data
                node = node.prev
            }
        } else {
            node = node || this.head
            while (node) {
                yield node.data
                node = node.next
            }
        }
    }

    /**
     * 其它待实现方法 删除头节点，删除尾节点，在某节点后插入，依据key查找+删除节点
     */
}

// export for commonJS or browser
if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = LinkedList
else window.LinkedList = LinkedList
