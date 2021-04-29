/**
 * 链表模块
 * @file linkedlist.js
 * @author 赵鑫<7176466@qq.com>
 */

/**
 * 双向链表节点类
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
 */
class LinkedList {
    /**
     * @param {Array} items 初始化数据数组
     */
    constructor(items) {
        this.clear = () => {
            this._head = null
            this._tail = null
            this._size = 0
        }
        this.clear()
        if (items && typeof items[Symbol.iterator] === 'function') {
            for (const item of items) this.append(item)
        }
        this[Symbol.iterator] = this.iterator
    }

    /**
     * 返回链表头节点
     * @returns {Node}
     */
    get head() {
        return this._head
    }

    /**
     * 返回链表头节点数据
     * @returns {*}
     */
    get first() {
        return this._head ? this._head.data : undefined
    }

    /**
     * 返回链表尾节点
     * @returns {Node}
     */
    get tail() {
        return this._tail
    }

    /**
     * 返回链表尾节点数据
     * @returns {*}
     */
    get last() {
        return this._tail ? this._tail.data : undefined
    }

    /**
     * 返回链表长度
     * @returns {Number}
     */
    get length() {
        return this._size
    }

    /**
     * 在链表头添加数据
     * @param {*} data
     * @returns {Node}
     */
    prepend(data) {
        if (data === undefined) return null
        const node = new Node(data)
        if (this._size === 0) {
            this._head = node
            this._tail = node
        } else {
            node.next = this._head
            this._head.prev = node
            this._head = node
        }
        this._size++
        return node
    }

    /**
     * 在链表尾添加数据
     * @param {*} data
     * @returns {Node}
     */
    append(data) {
        if (data === undefined) return null
        const node = new Node(data)
        if (this._size === 0) {
            this._head = node
            this._tail = node
        } else {
            node.prev = this._tail
            this._tail.next = node
            this._tail = node
        }
        this._size++
        return node
    }

    /**
     * 取出头节点，并返回其数据，链表为空时返回 undefined
     * @returns {*} 头节点数据
     */
    shift() {
        if (this._head === null) return undefined
        const data = this._head.data
        this._head = this._head.next
        if (this._head) this._head.prev = null
        else this._tail = null
        this._size--
        return data
    }

    /**
     * 取出尾节点，并返回其数据，链表为空时返回 undefined
     * @returns {*} 尾节点数据
     */
    pop() {
        if (this._tail === null) return undefined
        const data = this._tail.data
        this._tail = this._tail.prev
        if (this._tail) this._tail.next = null
        else this._head = null
        this._size--
        return data
    }

    /**
     * 查找数据并返回其节点位置，未找到时返回 -1
     * @param {*} data
     * @returns {Number}
     */
    index(data) {
        if (data === undefined) return -1
        for (let i = 0, node = this._head; node; i++, node = node.next) {
            if (node.data == data) return i
        }
        return -1
    }

    // /**
    //  * 在链表指定位置添加节点，成功返回该节点，失败返回 null
    //  * @param {*} index
    //  * @param {*} data
    //  * @returns {Node}
    //  */
    // insert(index, data) {
    //     // 插入位置越界
    //     if (index < 0 || this._size < index) return null
    //     // 当链表为空或在链表最后位置插入时，以调用append处理
    //     if (index === 0) return this.prepend(data)
    //     if (index === this._size) return this.append(data)
    //     // 此时链表不为空，index指向的原有节点成为新节点的后继
    //     const node = new Node(data)
    //     const current = this.getNode(index)
    //     node.prev = current.prev
    //     node.next = current
    //     current.prev.next = node
    //     current.prev = node
    //     this._size++
    //     return node
    // }

    // /**
    //  * 获取指定位置上的节点, 位置越界时返回 null
    //  * @param {Number} index
    //  * @returns {Node}
    //  */
    // getNode(index) {
    //     if (isNaN(index) || index < 0 || this._size <= index) return null
    //     let node = this._head
    //     for (let i = 0; i < index; i++) node = node.next
    //     return node
    // }

    // /**
    //  * 获取指定位置上节点的数据, 位置越界时返回 null
    //  * @param {Number} index
    //  * @returns {Node}
    //  */
    // get(index) {
    //     const node = this.getNode(index)
    //     return node?.data || null
    // }

    // /**
    //  * 修改指定位置节点，成功返回 true，否则返回 false
    //  * @param {*} index
    //  * @param {*} data
    //  * @returns {Boolean}
    //  */
    // set(index, data) {
    //     const node = this.getNode(index)
    //     if (!node) return false
    //     node.data = data
    //     return true
    // }

    // /**
    //  * 删除指定位置上的节点，成功返回 true，失败返回 false
    //  * @param {Number} index
    //  * @returns {Boolean}
    //  */
    // removeAt(index) {
    //     if (index < 0 || this._size <= index) return false
    //     if (index === 0) {
    //         if (this._size === 1) {
    //             this._head = null
    //             this._tail = null
    //         } else {
    //             this._head.next.prev = null
    //             this._head = this._head.next
    //         }
    //     } else if (index === this._size - 1) {
    //         this._tail.prev.next = null
    //         this._tail = this._tail.prev
    //     } else {
    //         const node = this.getNode(index) // 该node指向待删除节点的前继节点
    //         node.prev.next = node.next
    //         node.next.prev = node.prev
    //     }
    //     this._size--
    //     return true
    // }

    // /**
    //  * 删除指定节点，成功返回 true，失败返回 false
    //  * @param {*} data
    //  * @returns {Boolean}
    //  */
    // remove(data) {
    //     return this.removeAt(this.indexOf(data))
    // }

    /**
     * 链表数据生成器（正序）
     * @returns {Generator}
     */
    *iterator() {
        let node = this._head
        while (node) {
            yield node.data
            node = node.next
        }
    }

    /**
     * 链表数据生成器（倒序）
     * @returns {Generator}
     */
    *reversedIterator() {
        let node = this._tail
        while (node) {
            yield node.data
            node = node.prev
        }
    }
}

// export for commonJS or browser
if (typeof module !== 'undefined' && typeof exports === 'object') module.exports = LinkedList
else window.LinkedList = LinkedList
